import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialSharedModule } from 'src/app/share/modules/material.shared.module';
import { ProductsComponent } from './UI/products.component';
import { ProductCardComponent } from './UI/product-card/product-card.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    FlexLayoutModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
