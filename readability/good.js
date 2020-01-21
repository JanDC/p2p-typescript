"use strict";
exports.__esModule = true;
var ProductService = /** @class */ (function () {
    function ProductService() {
    }

    ProductService.prototype.getProducts = function (category) {
        // magic
        return category;
    };
    ProductService.prototype.purchase = function (identifier) {
        this.increaseAmount(identifier);
        return this.cart;
    };
    ProductService.prototype.increaseAmount = function (identifier) {
    };
    return ProductService;
}());
exports["default"] = ProductService;
