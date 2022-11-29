export interface CartModel {
  products: CartContentsModel[];
}

export interface CartContentsModel {
  productId?: number;
  quantity?: number
}
