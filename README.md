# Node IP Tools
Discover information about an IP address.

The currently supported services are:
- DNS (using pn/dns module)
- ASN (using cymru and ipstoasn services)
- GEO (using keycdn service)

## Usage
```javascript
const IpTools = require("node-ip-tools");
const ipTools = new IpTools.client();

const geo = IpTools.modules.geo;
const asn = IpTools.modules.asn;
const dns = IpTools.modules.dns;

ipTools
    .use(asn)
    .use(dns)
    .use(geo);

ipTools.run("109.183.50.244")
    .then(console.log);
```

