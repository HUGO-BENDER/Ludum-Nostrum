// --Modules in @angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// --Firebase & Firebase UI
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
// --Ngx-translate
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// --Modules in App
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSharedModule } from './share/modules/app.shared.module';
import { LogoComponent } from './share/logo/logo.component';
// --Modules Pages
import { DashboardModule } from './Contexts/dashboard/dashboard.module';
import { SidebarModule } from './Contexts/sidebar/sidebar.module';


//--- Temporales
import { FooterModule } from './Contexts/footer/footer.module';
import { ToolbarComponent } from './Contexts/dashboard/UI/toolbar/toolbar.component';



// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

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
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    AppRoutingModule,
    AppSharedModule,
    DashboardModule,
    SidebarModule,
    FooterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
