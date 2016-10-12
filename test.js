"use strict";

var assert = require('assert');
var pincodeDirectory = require('./index.js')

assert.deepStrictEqual(pincodeDirectory.lookup('hinjawadi'), [{
  officeName: 'Infotech  Park (Hinjawadi) S.O',
  pincode: 411057,
  taluk: 'Haveli',
  districtName: 'Pune',
  stateName: 'MAHARASHTRA'
}]);

assert.deepStrictEqual(pincodeDirectory.lookup(682028), [{
  officeName: 'Vennala S.O',
  pincode: 682028,
  taluk: 'Ernakulam',
  districtName: 'Ernakulam',
  stateName: 'KERALA'
}]);

assert.deepStrictEqual(pincodeDirectory.lookup('600096'), [{
  officeName: 'Perungudi S.O',
  pincode: 600096,
  taluk: 'Saidapet',
  districtName: 'Kanchipuram',
  stateName: 'TAMIL NADU'
}]);
