const { exportCLI } = require("../../utils/executeCLI");

const schemaIds = [
    "https://therecordingacademy.com/content/hamburger-menu",
    "https://therecordingacademy.com/content/global-header",
    "https://therecordingacademy.com/slot/global-navigation",
    "https://musicares.org/content/global-navigation",
    "https://therecordingacademy.com/content/mega-nav",
    "https://therecordingacademy.com/content/pillar-navigation",
    "https://therecordingacademy.com/content/newsletter-sign-up",
    "https://therecordingacademy.com/content/subscribe-nav-content",
    "https://therecordingacademy.com/content/subscribe-social-links",
    "https://therecordingacademy.com/partial/legacy-vocabulary",
];

exportCLI({ schemaIds, client: "traprod", toExport: "content-type", name: "exported-content-types" })
