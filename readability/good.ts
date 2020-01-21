import {Cart, Category, Product, ProductSku} from "../types";

export default class CartService {
    private cart: Cart;

    public getProducts(category: Category): Category {
        // magic
        return category;
    }

    public purchase(product: Product): Cart {
        // magic
        return this.cart;
    }

    private increaseAmount(sku: ProductSku): void {
        // increase counter
    }
}
