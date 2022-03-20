"use strict";
exports.__esModule = true;
var factoryMethod_1 = require("./factoryMethod");
var a = (0, factoryMethod_1.getProductInstance)("A");
var b = (0, factoryMethod_1.getProductInstance)("B");
console.log(a.method());
console.log(b.method());
