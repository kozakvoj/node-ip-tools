'use strict';

const dnsService = require("./service/dnsService");
const asnService = require("./service/asnService/asnService");

async function getInfo(ip) {
    return {
        dns: await dnsService.get(ip),
        asn: await asnService.get(ip)
    }
}

module.exports = getInfo;