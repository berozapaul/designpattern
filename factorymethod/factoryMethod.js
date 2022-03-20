"use strict";
exports.__esModule = true;
exports.getProductInstance = void 0;
var ProductA_1 = require("./ProductA");
var ProductB_1 = require("./ProductB");
function getProductInstance(type) {
    if (type === "A") {
        return new ProductA_1.ProductA();
    }
    else if (type === "B") {
        return new ProductB_1.ProductB();
    }
    return null;
}
exports.getProductInstance = getProductInstance;
