import { Component } from '@angular/core';
import { SidenavService } from 'src/app/share/services/sidenav.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent  {

  constructor(private sidenavService: SidenavService) { }

  errorCallback(errorData: any) {
    console.log('login con errorCallback', errorData);
  }

  successCallback(signInSuccessData: any) {
    console.log('login con exito successCallback', signInSuccessData);
    this.sidenavService.toggle();
  }



}
