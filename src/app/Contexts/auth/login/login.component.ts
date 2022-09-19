import { Component } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';
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

    // this.translate.get('App.Msg.Welcome', { value: signInSuccessData.displayName }).subscribe((res: string) => {
    //   this.ShowToastMessage(res);
    //   this.dialogRef.close();
    // })
  }



}
