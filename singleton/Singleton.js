"use strict";
exports.__esModule = true;
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    // private constructor so that no instance is created
    function Singleton() {
    }
    // This is how we create a singleton object
    Singleton.getInstance = function () {
        // check if an instance of the class is already created
        if (!Singleton.instance) {
            // If not created create an instance of the class
            // store the instance in the variable
            Singleton.instance = new Singleton();
        }
        // return the singleton object
        return Singleton.instance;
    };
    return Singleton;
}());
exports.Singleton = Singleton;
