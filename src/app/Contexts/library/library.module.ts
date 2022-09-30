import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialSharedModule } from '../../share/modules/material.shared.module'
import { LibraryComponent } from './UI/library.component';
import { ItemCardComponent } from './UI/item-card/item-card.component';


@NgModule({
  declarations: [
    LibraryComponent,
    ItemCardComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule,
    FlexLayoutModule
  ],
  exports: [
    LibraryComponent
  ]
})
export class LibraryModule { }
