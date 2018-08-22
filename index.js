'use strict';

module.exports = {
    client: require("./lib/IpTools"),
    modules: {
        asn: require("./lib/modules/asn/asn"),
        dns: require("./lib/modules/dns/dns"),
        geo: require("./lib/modules/geo/geo")
    }
};