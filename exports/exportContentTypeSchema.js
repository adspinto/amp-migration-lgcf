const { exportCLI, importCLI } = require("../utils/executeCLI");

const schemaIds = `
https://therecordingacademy.com/content/about-section
https://therecordingacademy.com/content/accordion
https://therecordingacademy.com/content/accordion-item
https://therecordingacademy.com/content/ad-board
https://therecordingacademy.com/content/addthis-social-sticky-nav
https://therecordingacademy.com/content/allowed-fetched-schemas
https://therecordingacademy.com/content/amplience-video-carousel
https://therecordingacademy.com/content/artists_and_groups
https://therecordingacademy.com/content/asset-kit-item
https://therecordingacademy.com/content/award-year-winner
https://therecordingacademy.com/content/award-year-winners-config
https://therecordingacademy.com/content/awards-card
https://therecordingacademy.com/content/awards-history-carousel
https://therecordingacademy.com/content/awards-row
https://therecordingacademy.com/content/backstage-filters
https://therecordingacademy.com/content/body-text
https://therecordingacademy.com/content/brightcove-video-player
https://therecordingacademy.com/content/countdown-clock
https://therecordingacademy.com/content/collections-video-carousel
https://therecordingacademy.com/content/content-block
https://therecordingacademy.com/content/content-block-list
https://therecordingacademy.com/content/content-hero
https://therecordingacademy.com/slot/content-page
https://therecordingacademy.com/content/content-row
https://therecordingacademy.com/content/content-row-item
https://therecordingacademy.com/content/contributor
https://therecordingacademy.com/content/credit
https://therecordingacademy.com/content/cta
https://therecordingacademy.com/content/curated-content
https://therecordingacademy.com/content/donation-widget
https://therecordingacademy.com/content/dynamic-video-carousel
https://therecordingacademy.com/content/executive
https://therecordingacademy.com/content/expandable-content
https://therecordingacademy.com/content/facebook-post-embed
https://therecordingacademy.com/content/featured-article-card
https://therecordingacademy.com/content/featured-pillar-card
https://therecordingacademy.com/content/featured-pillar-cards-row
https://therecordingacademy.com/slot/home-hero-editorial-carousel
https://therecordingacademy.com/content/gallery
https://therecordingacademy.com/content/generic-content
https://therecordingacademy.com/slot/generic-page-content
https://therecordingacademy.com/content/genre-details-landing-page
https://therecordingacademy.com/content/global-footer
https://therecordingacademy.com/slot/global-footer
https://therecordingacademy.com/content/global-footer-content
https://therecordingacademy.com/content/global-footer-navigation
https://therecordingacademy.com/content/hamburger-menu
https://therecordingacademy.com/content/global-header
https://therecordingacademy.com/slot/global-navigation
https://therecordingacademy.com/content/global-site-settings
https://therecordingacademy.com/content/google-ad
https://therecordingacademy.com/content/hero-carousel
https://therecordingacademy.com/content/hero-carousel-info-card
https://therecordingacademy.com/content/hero-carousel-info-cards
https://therecordingacademy.com/content/hero-slide
https://therecordingacademy.com/content/iframe-content
https://schema-examples.com/media
https://therecordingacademy.com/content/impact-media-carousel
https://therecordingacademy.com/content/impact-media-slide
https://therecordingacademy.com/content/instagram-embed
https://therecordingacademy.com/content/landing-page
https://therecordingacademy.com/content/link-cards
https://therecordingacademy.com/content/mega-nav
https://therecordingacademy.com/content/member-discounts
https://therecordingacademy.com/content/member-notice-message
https://therecordingacademy.com/content/member-notices
https://therecordingacademy.com/content/membership-hero
https://therecordingacademy.com/content/membership-hero-item
https://therecordingacademy.com/content/meta-data
https://therecordingacademy.com/content/mission-statement
https://therecordingacademy.com/content/music_genre
https://musicares.org/content/global-navigation
https://therecordingacademy.com/slot/home-page
https://therecordingacademy.com/content/muzooka-webhooks
https://therecordingacademy.com/content/news-article
https://therecordingacademy.com/content/news-carousel
https://therecordingacademy.com/content/newsletter-sign-up
https://therecordingacademy.com/content/nomination
https://therecordingacademy.com/content/page
https://therecordingacademy.com/content/partner
https://therecordingacademy.com/content/partner-logo-carousel
https://therecordingacademy.com/content/partner-logo-slide
https://therecordingacademy.com/content/performer
https://therecordingacademy.com/content/performers-grid
https://therecordingacademy.com/content/photo
https://therecordingacademy.com/content/pillar-navigation
https://therecordingacademy.com/content/press-release
https://therecordingacademy.com/content/program-banner
https://therecordingacademy.com/content/series-or-collection
https://therecordingacademy.com/content/series-video-carousel
https://therecordingacademy.com/content/show-year
https://therecordingacademy.com/content/simple-content-card
https://therecordingacademy.com/content/slide
https://therecordingacademy.com/content/social-media-carousel
https://therecordingacademy.com/content/subscribe-nav-content
https://therecordingacademy.com/content/subscribe-social-links
https://therecordingacademy.com/content/testimonial-carousel
https://therecordingacademy.com/content/text-banner
https://therecordingacademy.com/content/ticketing-page
https://therecordingacademy.com/content/top-full-banner
https://therecordingacademy.com/content/top-full-banner-carousel
https://therecordingacademy.com/content/top-subnav
https://therecordingacademy.com/content/tweet-embed
https://therecordingacademy.com/content/video
https://therecordingacademy.com/content/video-detail-content
https://therecordingacademy.com/content/video-embed-player
https://therecordingacademy.com/content/video-hero
https://therecordingacademy.com/content/video-playlist
https://therecordingacademy.com/partial/legacy-vocabulary
https://therecordingacademy.com/content/youtube-subscribe-banner
https://therecordingacademy.com/partial/video-embed-types
https://therecordingacademy.com/partial/newsletter-site-partial
https://therecordingacademy.com/partial/navigation
https://therecordingacademy.com/partial/meta-data
https://therecordingacademy.com/content/meta-data
https://therecordingacademy.com/partial/content
https://therecordingacademy.com/partial/banner-content

`;
const t = [`https://therecordingacademy.com/partial/legacy-vocabulary`];

// const list = schemaIds2.replace(/(\r\n|\n|\r)/gm, "").split("https://").map(item => `https://${item}`).filter(item => item !== "https://");
// const listImport = schemaIds2.replace(/(\r\n|\n|\r)/gm, "").split("https://").map(item => `https://${item}`).filter(item => item !== "https://" && !item.includes("partial"));

// console.log(listImport)
// exportCLI({ schemaIds: list, client: "traproduction", toExport: "content-type-schema", name: "exported-content-schemas-production" })
// exportCLI({ schemaIds: t, client: "traproduction", toExport: "content-type", name: "exported-content-types-production" })
// importCLI({ client: "lradev", toImport: "content-type-schema", name: "exported-content-schemas-production" });
importCLI({ client: "lradev", toImport: "content-type", name: "exported-content-types-production" })


// 60f1eed8cff47e00013117ef
// dc-cli content-item export


