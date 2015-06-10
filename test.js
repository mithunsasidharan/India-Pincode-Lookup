"use strict";

var pincodeDirectory = require('./index.js')

pincodeDirectory.lookup('hinjawadi'); //[ { officeName: 'Infotech  Park (Hinjawadi) S.O', pincode: 411057, taluk: 'Haveli', districtName: 'Pune', stateName: 'MAHARASHTRA' } ]
pincodeDirectory.lookup(682028); // [ { officeName: 'Vennala S.O', pincode: 682028, taluk: 'Ernakulam', districtName: 'Ernakulam', stateName: 'KERALA' } ]
pincodeDirectory.lookup('600097'); // [ { officeName: 'Oggiamthoraipakkam S.O', pincode: 600097, taluk: 'NA', districtName: 'Kanchipuram', stateName: 'TAMIL NADU' }, { officeName: 'Karapakkam S.O', pincode: 600097, taluk: 'NA', districtName: 'Kanchipuram', stateName: 'TAMIL NADU' } ]