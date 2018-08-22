'use strict';

module.exports = function checkIp(ip) {
    const baseUrl = `https://tools.keycdn.com/geo.json?host=${ip}`;

    return this.dispatch(baseUrl)
        .then(res => {
            if (res.data.data === undefined) throw Error("No response");
            if (res.data.status !== "success") throw Error(`Status: ${res.data.status}`);

            return res.data.data.geo;
        })
};
