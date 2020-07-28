/**
 * External dependencies
 */
import React from 'react';
import { useTranslate } from 'i18n-calypso';
import { Card } from '@automattic/components';

/**
 * Internal dependencies
 */
import InlineSupportLink from 'components/inline-support-link';
import { localizeUrl } from 'lib/i18n-utils';

/**
 * Style dependencies
 */
import quickStartVideoImage from 'assets/images/customer-home/quick-start-video-ss.png';
import './style.scss';

export const QuickStartVideo = () => {
	const translate = useTranslate();

	return (
		<div className="quick-start-video">
			<h2 className="quick-start-video__heading customer-home__section-heading">
				{ translate( 'Watch this video to get started' ) }
			</h2>
			<Card>
				<div>
					<InlineSupportLink
						supportPostId={ 81083 }
						supportLink={ localizeUrl( 'https://wordpress.com/support/start/' ) }
						showIcon={ false }
						showText={ false }
						showHero={ true }
						text="Welcome video"
						heroImage={ quickStartVideoImage }
						tracksEvent="calypso_customer_home_card_impression"
						tracksOptions="quick-start-video"
						statsGroup="calypso_customer_home_card_impression'"
						statsName="quick-start-video"
					/>
				</div>
			</Card>
		</div>
	);
};

export default QuickStartVideo;
