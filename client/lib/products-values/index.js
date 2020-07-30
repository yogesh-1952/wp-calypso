/**
 * Internal dependencies
 */
import { isGSuiteOrExtraLicenseProductSlug } from 'lib/gsuite';
import {
	PLAN_BUSINESS_MONTHLY,
	PLAN_BUSINESS,
	PLAN_BUSINESS_2_YEARS,
	PLAN_PREMIUM,
	PLAN_PREMIUM_2_YEARS,
	PLAN_PERSONAL,
	PLAN_PERSONAL_2_YEARS,
} from 'lib/plans/constants';

import { assertValidProduct } from './utils/assert-valid-product';
import { formatProduct } from './format-product';
import { isPlan } from './is-plan';
import { isDomainMapping } from './is-domain-mapping';
import { isDomainRegistration } from './is-domain-registration';
import { getDomain } from './get-domain';

const productDependencies = {
	domain: {
		domain_redemption: true,
		gapps: true,
		gapps_extra_license: true,
		gapps_unlimited: true,
	},
	[ PLAN_BUSINESS_MONTHLY ]: {
		domain_redemption: true,
	},
	[ PLAN_BUSINESS ]: {
		domain_redemption: true,
	},
	[ PLAN_BUSINESS_2_YEARS ]: {
		domain_redemption: true,
	},
	[ PLAN_PERSONAL ]: {
		domain_redemption: true,
	},
	[ PLAN_PERSONAL_2_YEARS ]: {
		domain_redemption: true,
	},
	[ PLAN_PREMIUM ]: {
		domain_redemption: true,
	},
	[ PLAN_PREMIUM_2_YEARS ]: {
		domain_redemption: true,
	},
};

export { formatProduct } from './format-product';
export { isChargeback } from './is-chargeback';
export { includesProduct } from './includes-product';
export { isFreePlan } from './is-free-plan';
export { isFreeJetpackPlan } from './is-free-jetpack-plan';
export { isFreeTrial } from './is-free-trial';
export { isPersonal } from './is-personal';
export { isBlogger } from './is-blogger';
export { isPremium } from './is-premium';
export { isBusiness } from './is-business';
export { isEcommerce } from './is-ecommerce';
export { isEnterprise } from './is-enterprise';
export { isJetpackPlanSlug } from './is-jetpack-plan-slug';
export { isJetpackPlan } from './is-jetpack-plan';
export { isJetpackBusiness } from './is-jetpack-business';
export { isJetpackPremium } from './is-jetpack-premium';
export { isVipPlan } from './is-vip-plan';
export { isMonthly } from './is-monthly';
export { isYearly } from './is-yearly';
export { isBiennially } from './is-biennially';
export { isJetpackMonthlyPlan } from './is-jetpack-monthly-plan';
export { isJetpackBackupSlug } from './is-jetpack-backup-slug';
export { isJetpackBackup } from './is-jetpack-backup';
export { isJetpackScanSlug } from './is-jetpack-scan-slug';
export { isJetpackAntiSpamSlug } from './is-jetpack-anti-spam-slug';
export { isJetpackScan } from './is-jetpack-scan';
export { isJetpackAntiSpam } from './is-jetpack-anti-spam';
export { isJetpackCloudProductSlug } from './is-jetpack-cloud-product-slug';
export { isJetpackProductSlug } from './is-jetpack-product-slug';
export { isJetpackProduct } from './is-jetpack-product';
export { getProductFromSlug } from './get-product-from-slug';
export { isJpphpBundle } from './is-jpphp-bundle';
export { isPlan } from './is-plan';
export { isDotComPlan } from './is-dot-com-plan';
export { isDomainMapping } from './is-domain-mapping';
export { isDomainRegistration } from './is-domain-registration';
export { isDomainProduct } from './is-domain-product';
export { isDomainRedemption } from './is-domain-redemption';
export { getIncludedDomainPurchaseAmount } from './get-included-domain-purchase-amount';
export { isSiteRedirect } from './is-site-redirect';
export { allowedProductAttributes } from './allowed-product-attributes';
export { isDomainTransfer } from './is-domain-transfer';
export { isDomainTransferProduct } from './is-domain-transfer-product';
export { isDelayedDomainTransfer } from './is-delayed-domain-transfer';
export { isBundled } from './is-bundled';
export { isCredits } from './is-credits';
export { getDomainProductRanking } from './get-domain-product-ranking';
export { getDomain } from './get-domain';
export { getProductsSlugs } from './get-products-slugs';
export { getProductClass } from './get-product-class';
export { getJetpackProductDisplayName } from './get-jetpack-product-display-name';
export { getJetpackProductTagline } from './get-jetpack-product-tagline';

export function isDependentProduct( product, dependentProduct, domainsWithPlansOnly ) {
	let isPlansOnlyDependent = false;

	product = formatProduct( product );
	assertValidProduct( product );

	const slug = isDomainRegistration( product ) ? 'domain' : product.product_slug;
	const dependentSlug = isDomainRegistration( dependentProduct )
		? 'domain'
		: dependentProduct.product_slug;

	if ( domainsWithPlansOnly ) {
		isPlansOnlyDependent =
			isPlan( product ) &&
			( isDomainRegistration( dependentProduct ) || isDomainMapping( dependentProduct ) );
	}

	return (
		isPlansOnlyDependent ||
		( productDependencies[ slug ] &&
			productDependencies[ slug ][ dependentSlug ] &&
			getDomain( product ) === getDomain( dependentProduct ) )
	);
}
export function isFreeWordPressComDomain( product ) {
	product = formatProduct( product );
	assertValidProduct( product );
	return product.is_free === true;
}

export function isGoogleApps( product ) {
	product = formatProduct( product );
	assertValidProduct( product );

	return isGSuiteOrExtraLicenseProductSlug( product.product_slug );
}

export function isGuidedTransfer( product ) {
	product = formatProduct( product );
	assertValidProduct( product );

	return 'guided_transfer' === product.product_slug;
}

export function isTheme( product ) {
	product = formatProduct( product );
	assertValidProduct( product );

	return 'premium_theme' === product.product_slug;
}

export function isCustomDesign( product ) {
	product = formatProduct( product );
	assertValidProduct( product );

	return 'custom-design' === product.product_slug;
}

export function isNoAds( product ) {
	product = formatProduct( product );
	assertValidProduct( product );

	return 'no-adverts/no-adverts.php' === product.product_slug;
}

export function isVideoPress( product ) {
	product = formatProduct( product );
	assertValidProduct( product );

	return 'videopress' === product.product_slug;
}

export function isUnlimitedSpace( product ) {
	product = formatProduct( product );
	assertValidProduct( product );

	return 'unlimited_space' === product.product_slug;
}

export function isUnlimitedThemes( product ) {
	product = formatProduct( product );
	assertValidProduct( product );

	return 'unlimited_themes' === product.product_slug;
}

export function isSpaceUpgrade( product ) {
	product = formatProduct( product );
	assertValidProduct( product );

	return (
		'1gb_space_upgrade' === product.product_slug ||
		'5gb_space_upgrade' === product.product_slug ||
		'10gb_space_upgrade' === product.product_slug ||
		'50gb_space_upgrade' === product.product_slug ||
		'100gb_space_upgrade' === product.product_slug
	);
}

export function isConciergeSession( product ) {
	product = formatProduct( product );
	assertValidProduct( product );

	return 'concierge-session' === product.product_slug;
}
