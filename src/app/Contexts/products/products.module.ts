import { ProductHardcodeProviderService } from './infraestructure/driven-adapters/hardcode-provider.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// --Translate
import { TranslateModule } from '@ngx-translate/core';

import { MaterialSharedModule } from 'src/app/share/modules/material.shared.module';
import { ProductsComponent } from './UI/products.component';
import { ProductCardComponent } from './UI/product-card/product-card.component';
import { ProductGateway } from './domain/product-gateway';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    FlexLayoutModule,
    TranslateModule.forChild({})
  ],
  exports: [
    ProductsComponent
  ],
  providers: [
    {provide: ProductGateway, useClass: ProductHardcodeProviderService}
  ]
})
export class ProductsModule { }
