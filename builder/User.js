"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(builder) {
        this.name = builder.Name;
        this.age = builder.Age;
        this.phone = builder.Phone;
        this.address = builder.Address;
    }
    Object.defineProperty(User.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Age", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Phone", {
        get: function () {
            return this.phone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Address", {
        get: function () {
            return this.address;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
exports.User = User;
