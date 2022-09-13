import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './share/services/sidenav.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements AfterViewInit {
  @ViewChild('appsidenav', { static: true }) public sidenav!: MatSidenav;

  constructor(
    private sidenavService: SidenavService,
    ) {}


  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
