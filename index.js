"use strict";

var pincodeData = require('./pincodes.json');

function isNumeric(num) {
    return !isNaN(num);
}

module.exports = {
    lookup: function lookup(pincode) {
        if (isNumeric(pincode)) {
            if (typeof pincode === 'string') {
                return pincodeData.filter(function(e) {
                    return e.pincode === +pincode;
                });
            } else if (typeof pincode === 'number') {
                return pincodeData.filter(function(e) {
                    return e.pincode === pincode;
                });
            }
        } else {
            var regex = RegExp(pincode, 'i');
            return pincodeData.filter(function(e) {
                return e.officeName.match(regex);
            });
        }
    }
}