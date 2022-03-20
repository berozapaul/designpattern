"use strict";
exports.__esModule = true;
var Singleton_1 = require("./Singleton");
var singleton1 = Singleton_1.Singleton.getInstance();
var singleton2 = Singleton_1.Singleton.getInstance();
if (singleton1 === singleton2) {
    console.log("Two singleton instances are equivalent");
}
else {
    console.log("Two singleton instances are equivalent");
}
