India-Pincode-Lookup
====================

Node module to easily lookup any pincode details in India.

The pincode data used in this module is provided by data.gov.in

Install using npm:

    npm install india-pincode-lookup

```javascript
var pincodeDirectory = require('india-pincode-lookup');

pincodeDirectory.lookup('hinjawadi'); // //[ { officeName: 'Infotech  Park (Hinjawadi) S.O', pincode: 411057, taluk: 'Haveli', districtName: 'Pune', stateName: 'MAHARASHTRA' } ]

pincodeDirectory.lookup(682028); // [ { officeName: 'Vennala S.O', pincode: 682028, taluk: 'Ernakulam', districtName: 'Ernakulam', stateName: 'KERALA' } ]

pincodeDirectory.lookup('600096')[ { officeName: 'Perungudi S.O',	pincode: 600096,	taluk: 'Saidapet',	districtName: 'Kanchipuram', stateName: 'TAMIL NADU' } ]
```

## License

MIT