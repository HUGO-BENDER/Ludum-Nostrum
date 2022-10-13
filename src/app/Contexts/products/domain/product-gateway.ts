import { Product } from "./product-model";

export abstract class ProductGateway {

  abstract getProductList(): Promise<Product[]>;

}
