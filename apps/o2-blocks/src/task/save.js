/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';

export const save = ( contentTag = 'p' ) => ( { attributes } ) => {
	const { content, className, status } = attributes;
	const todoClass = classnames( 'wp-block-todo', className, {
		'is-new': 'new' === status,
		'is-in-progress': 'in-progress' === status,
		'is-done': 'done' === status,
	} );

	/* eslint-disable no-nested-ternary */
	// prettier-ignore
	const indicator =
		'new' === status ? '⭕️' :
		'in-progress' === status ? '🔄' :
		'done' === status ? '✅' :
		'❓';
	/* eslint-enable no-nested-ternary */

	return (
		<div className={ todoClass }>
			<span className="wp-block-todo__indicator" role="img" aria-label={ status }>
				{ indicator }
			</span>
			<span style={ { display: 'inline-block', marginLeft: '6px' } }>
				<RichText.Content tagName={ contentTag } value={ content } />
			</span>
		</div>
	);
};

export default save();
