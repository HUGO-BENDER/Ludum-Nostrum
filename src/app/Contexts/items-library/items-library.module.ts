import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


import { ItemsLibraryComponent } from './UI/items-library.component';
import { MaterialSharedModule } from 'src/app/share/modules/material.shared.module';
import { ItemCardComponent } from './UI/item-card/item-card.component';



@NgModule({
  declarations: [
    ItemsLibraryComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    FlexLayoutModule
  ],
  exports: [
    ItemsLibraryComponent
  ]
})
export class ItemsLibraryModule { }
