import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    AuthRoutingModule
  ]
})
export class AuthModule { }
