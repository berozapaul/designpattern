"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(builder) {
        this.name = builder.getName();
        this.age = builder.getAge();
        this.phone = builder.getPhone();
        this.address = builder.getAddress();
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.getPhone = function () {
        return this.phone;
    };
    User.prototype.getAddress = function () {
        return this.address;
    };
    return User;
}());
exports.User = User;
