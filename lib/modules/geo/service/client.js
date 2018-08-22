'use strict';

const axios = require("axios");

class GeoIpClient {
    constructor(options = {}) {
        this.options = options ;
    }
}

GeoIpClient.prototype.dispatch = function(baseURL) {
    return axios.create({
        baseURL,
        headers: this.options.headers || {'Accept': '*/json'},
        timeout: this.options.timeout || 5000
    }).get(baseURL)
};

GeoIpClient.prototype.getGeo = require("./getGeo");

module.exports = GeoIpClient;