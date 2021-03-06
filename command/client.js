"use strict";
exports.__esModule = true;
var command_1 = require("./command");
var receiver = new command_1.Receiver();
var addToCart = new command_1.AddToCart(receiver);
var wishList = new command_1.AddToWishList(receiver);
var invoker = new command_1.Invoker();
invoker.storeAndExecute(addToCart);
invoker.storeAndExecute(wishList);
console.log(invoker.getCommands());
