
// --Modules in @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// --Modules in App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './share/modules/app.material.module';
import { LogoComponent } from './share/logo/logo.component';
// --Pages
import { HomeComponent } from './Contexts/dashboard/UI/page-home/home.component';
import { ToolbarComponent } from './Contexts/dashboard/UI/toolbar/toolbar.component';
import { JumbotronComponent } from './Contexts/dashboard/UI/jumbotron/jumbotron.component';
import { FooterComponent } from './Contexts/dashboard/UI/footer/footer.component'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    JumbotronComponent,
    FooterComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
