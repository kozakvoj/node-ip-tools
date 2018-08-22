'use strict';

const dns = new require('pn/dns');
const H = require('hofp');

module.exports = async (ip, data, next) => {
    data.dns = await H.retry(() => dns.lookupService(ip, 80), 3, 2000);

    next();
};