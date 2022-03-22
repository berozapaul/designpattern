"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Receiver = exports.Invoker = exports.AddToWishList = exports.AddToCart = exports.Command = void 0;
var Command = /** @class */ (function () {
    function Command() {
    }
    Command.prototype.execute = function () {
        throw new Error("Abstract method!");
    };
    return Command;
}());
exports.Command = Command;
var AddToCart = /** @class */ (function (_super) {
    __extends(AddToCart, _super);
    function AddToCart(receiver) {
        var _this = _super.call(this) || this;
        _this.receiver = receiver;
        return _this;
    }
    AddToCart.prototype.execute = function () {
        console.log("`execute` method of AddToCart is being called!");
        this.receiver.action();
    };
    return AddToCart;
}(Command));
exports.AddToCart = AddToCart;
var AddToWishList = /** @class */ (function (_super) {
    __extends(AddToWishList, _super);
    function AddToWishList(receiver) {
        var _this = _super.call(this) || this;
        _this.receiver = receiver;
        return _this;
    }
    AddToWishList.prototype.execute = function () {
        console.log("`execute` method of AddToWishList is being called!");
        this.receiver.action();
    };
    return AddToWishList;
}(Command));
exports.AddToWishList = AddToWishList;
var Invoker = /** @class */ (function () {
    function Invoker() {
        this.commands = [];
    }
    Invoker.prototype.storeAndExecute = function (cmd) {
        this.commands.push(cmd);
        cmd.execute();
    };
    Invoker.prototype.getCommands = function () {
        return this.commands;
    };
    return Invoker;
}());
exports.Invoker = Invoker;
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.action = function () {
        console.log("action is being called!");
    };
    return Receiver;
}());
exports.Receiver = Receiver;
