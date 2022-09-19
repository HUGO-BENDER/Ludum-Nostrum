import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './UI/home.component';
import { JumbotronComponent } from './UI/jumbotron/jumbotron.component';


@NgModule({
  imports: [CommonModule, FlexLayoutModule,DashboardRoutingModule],
  declarations: [HomeComponent,JumbotronComponent],
  exports: [HomeComponent],
  providers: [],
})
export class DashboardModule {}
