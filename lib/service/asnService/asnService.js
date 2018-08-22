'use strict';

const iptoasn = require('./iptoasn');
const cymru = require('./cymru');

module.exports = {
    get: ip => iptoasn
        .checkIp([ip])
        .catch(() => cymru
            .get([ip])
            .catch(() => ip)
        )
};