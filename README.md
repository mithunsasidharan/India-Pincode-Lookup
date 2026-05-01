India-Pincode-Lookup
====================

Node module to easily lookup any pincode details in India.

The pincode data used in this module is provided by data.gov.in

## Install using npm:

``` bash
npm install india-pincode-lookup
```

## Example usage

```javascript
var pincodeDirectory = require('india-pincode-lookup');

pincodeDirectory.lookup('Arjun Guri');
/*[{ 
	officeName: 'Arjun Guri B.O',
	pincode: 785697,
	taluk: 'Svs',
	districtName: 'Sibsagar',
	stateName: 'ASSAM' 
	}]*/


pincodeDirectory.lookup(682028);
/*[{
	officeName: 'Vennala S.O',
	pincode: 682028,
	taluk: 'Ernakulam',
	districtName: 'Ernakulam',
	stateName: 'KERALA'
	}]*/


pincodeDirectory.lookup('600096')
/*[{
	officeName: 'Perungudi S.O',
	pincode: 600096,
	taluk: 'Saidapet',
	districtName: 'Kanchipuram',
	stateName: 'TAMIL NADU'
	}]*/
```

## Sources

The pincode data used in the module has been provided by data.gov.in.


## License

MIT
## Live API Alternative

If you need a hosted REST API instead of a local npm module:

**[indianpincode.com](https://indianpincode.com/)** — Free, no-auth endpoint with GPS coordinates, search by name/district, and full post office data. Built on the same data.gov.in source.

```bash
curl https://indianpincode.com/api/v1/pincode/682028
```
