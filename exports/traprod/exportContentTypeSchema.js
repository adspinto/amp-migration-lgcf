const { exportCLI } = require("../../utils/executeCLI");
const { generateClient } = require("../../utils/generateClient");

const clientConfig = generateClient("lradev");
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
    "https://therecordingacademy.com/content/subscribe-social-link",
    "https://therecordingacademy.com/partial/newsletter-site-partial",
    "https://therecordingacademy.com/partial/content",
    "https://therecordingacademy.com/partial/banner-content",
    "https://therecordingacademy.com/partial/legacy-vocabulary",
    "https://therecordingacademy.com/partial/navigation",
    "https://therecordingacademy.com/partial/meta-data",
    "https://therecordingacademy.com/partial/video-embed-types",
];

// 62549d114cedfd0001b8185b
console.log(`dc-cli content-item export test-content-news --folderId 62549d114cedfd0001b8185b ${clientConfig}`);
// exportCLI({ schemaIds, client: "traprod", toExport: "content-type-schema", name: "test-content-news" })


