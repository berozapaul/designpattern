"use strict";
exports.__esModule = true;
exports.UserBuilder = void 0;
var User_1 = require("./User");
var UserBuilder = /** @class */ (function () {
    function UserBuilder(name) {
        this.name = name;
    }
    UserBuilder.prototype.getName = function () {
        return this.name;
    };
    UserBuilder.prototype.setAge = function (value) {
        this.age = value;
        return this;
    };
    UserBuilder.prototype.getAge = function () {
        return this.age;
    };
    UserBuilder.prototype.setPhone = function (value) {
        this.phone = value;
        return this;
    };
    UserBuilder.prototype.getPhone = function () {
        return this.phone;
    };
    UserBuilder.prototype.setAddress = function (value) {
        this.address = value;
        return this;
    };
    UserBuilder.prototype.getAddress = function () {
        return this.address;
    };
    UserBuilder.prototype.build = function () {
        return new User_1.User(this);
    };
    return UserBuilder;
}());
exports.UserBuilder = UserBuilder;
