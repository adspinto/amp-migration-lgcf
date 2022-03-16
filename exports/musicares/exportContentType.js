const { exportCLI } = require("../../utils/executeCLI");

const schemaIds = [
    "https://therecordingacademy.com/slot/home-page",
    "https://therecordingacademy.com/slot/home-hero-editorial-carousel",
    "https://therecordingacademy.com/slot/global-navigation",
    "https://therecordingacademy.com/content/mission-statement",
    "https://therecordingacademy.com/content/impact-media-carousel",
    "https://therecordingacademy.com/content/impact-media-slide",
    "https://therecordingacademy.com/content/program-banner",
    "https://therecordingacademy.com/content/content-block",
    "https://therecordingacademy.com/content/content-block-list",
    "https://therecordingacademy.com/content/testimonial-carousel",
    "https://therecordingacademy.com/content/partner-logo-slide",
    "https://therecordingacademy.com/content/partner-logo-carousel",
    "https://therecordingacademy.com/content/partner",
    "https://therecordingacademy.com/content/newsletter-sign-up",
    "https://therecordingacademy.com/content/addthis-social-sticky-nav",
    "https://therecordingacademy.com/slot/global-footer",
    "https://therecordingacademy.com/content/global-footer-content",
    "https://therecordingacademy.com/content/global-footer-navigation",
    "https://therecordingacademy.com/content/donation-widget",
    "https://therecordingacademy.com/content/hero-slide",
    "https://therecordingacademy.com/content/meta-data",
    "https://therecordingacademy.com/content/hero-carousel-info-card",
    "https://therecordingacademy.com/content/hero-carousel-info-cards",
    "https://therecordingacademy.com/content/hero-carousel",

];

exportCLI({ schemaIds, client: "musicaresdev", toExport: "content-type", name: "musicares-exported-content-types" })
