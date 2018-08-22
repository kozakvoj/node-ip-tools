'use strict';

const iptoasn = require('./service/iptoasn');
const cymru = require('./service/cymru');

module.exports = async (ip, data, next) => {
    data.asn = await iptoasn
        .checkIp([ip])
        .catch(() => cymru
            .get([ip])
            .catch(() => ip));

    next();
};