import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { TranslateModule } from '@ngx-translate/core';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgxAuthFirebaseUIModule,
    TranslateModule.forChild({}),
    AuthRoutingModule
  ]
})
export class AuthModule { }
