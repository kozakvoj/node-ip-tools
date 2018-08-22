'use strict';

const describe = require("mocha").describe;
const it = require("mocha").it;
const assert = require("assert");


describe("IP Tools client", async () => {
    it("should retrieve information about an IP address", async () => {
            const IpTools = require("./../index");
            const ipTools = new IpTools.client();

            const geo = IpTools.modules.geo;
            const asn = IpTools.modules.asn;
            const dns = IpTools.modules.dns;

            ipTools
                .use(asn)
                .use(dns)
                .use(geo);

            const data = await ipTools.run("109.183.50.244");

            assert.strictEqual(data.asn.countryCode, "CZ");
            assert.strictEqual(data.dns.hostname, "109-183-50-244.tmcz.cz");
            assert.strictEqual(data.geo.isp, "T-Mobile Czech Republic a.s.");
        }
    );
});