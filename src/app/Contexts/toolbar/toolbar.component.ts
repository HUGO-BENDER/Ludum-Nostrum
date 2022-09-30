import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SidenavService } from 'src/app/share/services/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.less'],
})
export class ToolbarComponent implements OnInit {
  constructor(
    private sidenavService: SidenavService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  goToAuth() {
    this.router.navigate(['/auth']);
  }

  toggleAppSidenav() {
    this.sidenavService.toggle();
  }
}
