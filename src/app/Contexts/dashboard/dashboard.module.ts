import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// --Translate
import { TranslateModule } from '@ngx-translate/core';

//-- Modules
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ItemsLibraryModule } from './../items-library/items-library.module'

//-- Components
import { DashboardComponent } from './UI/dashboard.component';
import { JumbotronComponent } from './../jumbotron/jumbotron.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    TranslateModule.forChild({}),
    DashboardRoutingModule,
    ItemsLibraryModule
  ],
  declarations: [DashboardComponent, JumbotronComponent],
  exports: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
