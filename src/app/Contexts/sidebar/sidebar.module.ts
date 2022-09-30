import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { MaterialSharedModule } from 'src/app/share/modules/material.shared.module';

import { SidebarComponent } from './UI/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    TranslateModule.forChild({}),
    MaterialSharedModule,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
