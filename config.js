
const config = () => {
    require('dotenv').config();
    return {
        musicaresdev: {
            appId: process.env.MUSICARES_APP_ID,
            appSecret: process.env.MUSICARES_APP_SECRET,
            hubId: process.env.MUSICARES_HUB_ID
        },
        lradev: {
            appId: process.env.LRADEV_APP_ID,
            appSecret: process.env.LRADEV_APP_SECRET,
            hubId: process.env.LRADEV_HUB_ID
        },
        lraprod: {
            appId: process.env.LRAPROD_APP_ID,
            appSecret: process.env.LRAPROD_APP_SECRET,
            hubId: process.env.LRAPROD_HUB_ID
        },
        traprod: {
            appId: process.env.OLD_APP_ID,
            appSecret: process.env.OLD_SECRET_ID,
            hubId: process.env.OLD_HUB_ID
        },
        traproduction: {
            appId: process.env.NEW_APP_ID,
            appSecret: process.env.NEW_SECRET_ID,
            hubId: process.env.NEW_HUB_ID
        },
    }
}

exports.config = config;