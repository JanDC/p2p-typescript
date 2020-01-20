import CartService from "../readability/bad";

const cartService = new CartService();

function purchaseButtonClicked(product) {
    cartService.purchase(product.sku);
}

function someOtherPurchaseButtonClicked(product) {
    cartService.increaseAmount(product.sku);
}