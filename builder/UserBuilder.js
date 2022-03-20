"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBuilder = void 0;
var User_1 = require("./User");
var UserBuilder = /** @class */ (function () {
    function UserBuilder(name) {
        this.name = name;
    }
    Object.defineProperty(UserBuilder.prototype, "Name", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    UserBuilder.prototype.setAge = function (value) {
        this.age = value;
        return this;
    };
    Object.defineProperty(UserBuilder.prototype, "Age", {
        get: function () {
            return this.age;
        },
        enumerable: false,
        configurable: true
    });
    UserBuilder.prototype.setPhone = function (value) {
        this.phone = value;
        return this;
    };
    Object.defineProperty(UserBuilder.prototype, "Phone", {
        get: function () {
            return this.phone;
        },
        enumerable: false,
        configurable: true
    });
    UserBuilder.prototype.setAddress = function (value) {
        this.address = value;
        return this;
    };
    Object.defineProperty(UserBuilder.prototype, "Address", {
        get: function () {
            return this.address;
        },
        enumerable: false,
        configurable: true
    });
    UserBuilder.prototype.build = function () {
        return new User_1.User(this);
    };
    return UserBuilder;
}());
exports.UserBuilder = UserBuilder;
