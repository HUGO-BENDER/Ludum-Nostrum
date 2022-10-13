import { Injectable } from '@angular/core';
import { ProductGateway } from './product-gateway';
import { Product } from './product-model';


@Injectable({
  providedIn: 'root'
})
export class ProductUsecaseService {

  constructor(private _providerProductGateway: ProductGateway) { }

  getProductList(): Promise<Product[]> {
    return this._providerProductGateway.getProductList();
  }

}
