/**
 * External dependencies
 */
import { orderBy } from 'lodash';

/**
 * Internal dependencies
 */
import getMedia from './get-media';

/**
 * Returns media for a specified site ID and query.
 *
 *
 * @param {object}  query  Query object
 * @returns {?Array}         Media
 */

export default function getMediaSortedByDate( state, siteId, query ) {
	const mediaItems = getMedia( state, siteId, query );

	if ( ! mediaItems ) {
		return null;
	}

	return orderBy( mediaItems, [ ( mediaItem ) => new Date( mediaItem.date ) ], [ 'desc' ] );
}
