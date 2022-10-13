import { Component, OnInit } from '@angular/core';

import { Product } from '../domain/product-model';
import { ProductUsecaseService } from '../domain/product-usecase.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  products!: Promise<Product[]>

  constructor( private _providerUseCases: ProductUsecaseService ) { }

  ngOnInit(): void {
    this.products = this._providerUseCases.getProductList();
  }

}
