import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppSharedModule } from 'src/app/share/modules/app.shared.module';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './UI/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, RouterModule, FlexLayoutModule, AppSharedModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
