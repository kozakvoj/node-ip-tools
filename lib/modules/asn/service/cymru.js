'use strict';

const R = require('ramda');
const IPToASN = require('ip-to-asn');
const client = new IPToASN();
const H = require('hofp');

module.exports = {
    /**
     * Returns resolved ASN for given IP adresses.
     *
     * @param ips Array of IP adresses
     * @returns {Promise<Array>}
     */
    get: async ips => {
        // must run in batches
        const ipsNotResolvedBatches = R.splitEvery(10, ips);

        return await R.flatten(await H.map(async batch => {
            const asnFromServiceObj = await getAsn(batch);
            return R.map(ip => R.assoc('ip', ip, asnFromServiceObj[ip]), batch);
        }, ipsNotResolvedBatches));
    }
};

function getAsn(ips) {
    return new Promise((resolve, reject) =>
        client.query(ips, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        }))
}