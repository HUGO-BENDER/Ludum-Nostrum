import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

import { SidenavService } from 'src/app/share/services/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less'],
})
export class ToolbarComponent {
  user: Observable<firebase.User | null>;

  constructor(
    private sidenavService: SidenavService,
    private router: Router,
    private au: AngularFireAuth
  ) {
    this.user = this.au.authState;
  }

  goToAuth() {
    this.router.navigate(['/auth']);
  }

  toggleAppSidenav() {
    this.sidenavService.toggle();
  }
}
