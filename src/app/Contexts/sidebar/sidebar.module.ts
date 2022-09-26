import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { AppSharedModule } from 'src/app/share/modules/app.shared.module';

import { SidebarComponent } from './UI/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    TranslateModule.forChild({}),
    AppSharedModule,
  ],
  exports: [SidebarComponent],
})
export class SidebarModule {}
