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

ipTools.run("188.247.240.199")
    .then(console.log);
```

Response:

```JSON
{  
   "asn":{  
      "countryCode":"RO",
      "ASN":39737,
      "description":"NETVISION-AS"
   },
   "dns":{  
      "hostname":"199.240.247.188.primetelecom.ro",
      "service":"http"
   },
   "geo":{  
      "host":"188.247.240.199",
      "ip":"188.247.240.199",
      "rdns":"199.240.247.188.primetelecom.ro",
      "asn":39737,
      "isp":"Net Vision Telecom SRL",
      "country_name":"Romania",
      "country_code":"RO",
      "region_name":null,
      "region_code":null,
      "city":null,
      "postal_code":null,
      "continent_name":"Europe",
      "continent_code":"EU",
      "latitude":46,
      "longitude":25,
      "metro_code":null,
      "timezone":"Europe/Bucharest",
      "datetime":"2018-08-22 23:29:25"
   }
}
```

