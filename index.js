"use strict";

function isNumeric(num) {
    return !isNaN(num);
}

module.exports = {

    pincodeData: require('./pincodes.json'),

    lookup: function lookup(pincode) {
        if (isNumeric(pincode)) {
            if (typeof pincode === 'string') {
                return this.pincodeData.filter(function(e) {
                    return e.pincode === +pincode;
                });
            } else if (typeof pincode === 'number') {
                return this.pincodeData.filter(function(e) {
                    return e.pincode === pincode;
                });
            }
        } else {
            var regex = RegExp(pincode, 'i');
            return this.pincodeData.filter(function(e) {
                return e.officeName.match(regex);
            });
        }
    }
}