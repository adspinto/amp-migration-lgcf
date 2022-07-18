const dc = require('dc-management-sdk-js');

const generateClient = () => {
    const client = new dc.DynamicContent({
        client_id: process.env.LRADEV_APP_ID,
        client_secret: process.env.LRADEV_APP_SECRET,
    });
    return client
}

module.exports = generateClient