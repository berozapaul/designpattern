"use strict";
exports.__esModule = true;
var UserBuilder_1 = require("./UserBuilder");
var userObj = new UserBuilder_1.UserBuilder('Joe Smith')
    .setAge(24)
    .setPhone("01911016")
    .setAddress("Munich, Germany")
    .build();
console.log(userObj.getName() + " " + userObj.getAge() + " " + userObj.getPhone() + " " + userObj.getAddress());
