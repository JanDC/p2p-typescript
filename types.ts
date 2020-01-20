export interface Product {
    sku: ProductSku;
}

export interface CartItem {
    sku: ProductSku;
    amount: number;
}

export interface Cart {
    items: CartItem[];
}

export class ProductSku extends String {

}

export class Category {
    public name: string;
    public products?: Product[]
}