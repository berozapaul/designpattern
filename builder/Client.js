"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserBuilder_1 = require("./UserBuilder");
var userObj = new UserBuilder_1.UserBuilder('')
    .setAge(24)
    .setPhone("01911016")
    .setAddress("Munich, Germany")
    .build();
console.log(userObj.Name + " " + userObj.Age + " " + userObj.Phone + " " + userObj.Address);
