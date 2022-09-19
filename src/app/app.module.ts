// --Modules in @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
// --Firebase & Firebase UI
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
// --Modules in App
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSharedModule } from './share/modules/app.shared.module';
import { LogoComponent } from './share/logo/logo.component';
// --Pages
import { DashboardModule } from './Contexts/dashboard/dashboard.module';
import { SidebarModule } from './Contexts/sidebar/sidebar.module';


//--- Temporales
import { FooterModule } from './Contexts/footer/footer.module';
import { ToolbarComponent } from './Contexts/dashboard/UI/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig),
    AppRoutingModule,
    AppSharedModule,
    DashboardModule,
    SidebarModule,
    FooterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
