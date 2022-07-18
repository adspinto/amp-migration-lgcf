
const { generateClient } = require("../utils/generateClient")

const { config } = require("../config");

const srcFolder = ` --srcFolder 613d49c44cedfd00010b3e49`;
const dstFolder = ` --dstFolder 62d5841cc9e77c0001e4e74a`;
const dstHubId = ` --dstHubId ${config().lradev.hubId}`;
const dstClientId = ` --dstClientId ${config().lradev.appId}`;
const dstSecret = ` --dstSecret ${config().lradev.appSecret}`;
const facet = ` --facet locale:pt`
const excludeKeys = true;
const clientConfig = generateClient("traprod");
const lgcfConfig = generateClient("lradev");

// this command should be done manually because it has progress and input
// copy content
// console.log(`dc-cli content-repository assign-content-type ${lgcfConfig} 61fd9704c9e77c00015b185f --contentTypeId https://therecordingacademy.com/content/about-section`);

console.log(`dc-cli content-item copy ${clientConfig} ${srcFolder} ${dstFolder} ${dstHubId} ${dstClientId} ${dstSecret}`);
// console.log(`dc-cli content-item assign-content-type ${lgcfConfig} 61fd9704c9e77c00015b185f --contentTypeId https://therecordingacademy.com/content/about-section`);

// devhttps://therecordingacademy.com/content/about-section
// 6287d0484cedfd00017e07af done
// 620dddf04cedfd00012ac0be d
// 62586fcc4cedfd00012d2337 d
// 62586fc74cedfd00012d2335 d
// 626718fec9e77c0001701a2d d
// 62549d114cedfd0001b8185b d
// 627d8e57c9e77c00018fc4c9 d
// 62799086c9e77c00011a4e85 d
// 620dde08d6018000018a0178 
// 627dce58c9e77c00017cbe54

// prod
// 629012344cedfd00010eac1e donev
// 629012394cedfd0001f557eb d
// 62901240c9e77c000143cc35 d
// 629012464cedfd0001c7c4db d
// 6290124d4cedfd000175845e d
// 62901255c9e77c00011132a5 d
// 6290125f4cedfd00010eac2b d
// 62901266c9e77c00015a4f8a d
// 6290126cc9e77c00011132a7
// 629012734cedfd000136cae4