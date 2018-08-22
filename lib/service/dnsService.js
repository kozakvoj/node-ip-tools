'use strict';

const dns = new require('pn/dns');
const H = require('hofp');

module.exports = {
    get: ip => H.retry(() => dns.lookupService(ip, 80), 3, 2000)
};