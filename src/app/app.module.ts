// --Modules in @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// --Firebase & Firebase UI
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
// --Modules in App
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './share/modules/app.material.module';
import { LogoComponent } from './share/logo/logo.component';
// --Pages
import { HomeComponent } from './Contexts/dashboard/UI/page-home/home.component';
import { ToolbarComponent } from './Contexts/dashboard/UI/toolbar/toolbar.component';
import { JumbotronComponent } from './Contexts/dashboard/UI/jumbotron/jumbotron.component';
import { FooterModule } from './Contexts/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    JumbotronComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    AppMaterialModule,
    FooterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
