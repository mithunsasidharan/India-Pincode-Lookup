# India-Pincode-Lookup

Node module to easily lookup any pincode details in India.

The pincode data used in this module is provided by data.gov.in

## Install using npm:

```bash
npm install india-pincode-lookup
```

## Example usage

```javascript
import { lookup } from 'india-pincode-lookup';

const details = lookup(682028);
console.log(details);
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

pincodeDirectory.lookup('600096');
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
