"use strict";
exports.__esModule = true;
exports.Adapter = void 0;
var Adaptee_1 = require("./Adaptee");
var Adapter = /** @class */ (function () {
    function Adapter() {
    }
    Adapter.prototype.call = function () {
        console.log("Adapter's `call` method is being called");
        var adaptee = new Adaptee_1.Adaptee();
        adaptee.method();
    };
    return Adapter;
}());
exports.Adapter = Adapter;
