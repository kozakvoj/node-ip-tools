'use strict';

const GeoIpClient = require("./service/client");
const client = new GeoIpClient();

module.exports = async (ip, data, next) => {
    data.geo = await client.getGeo(ip);

    next();
};