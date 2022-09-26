import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SidenavService } from 'src/app/share/services/sidenav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent implements OnInit {
  showMenuLanguage: boolean = false;
  currentUrl = '/home';
  currentLang!: string;
  listLanguages = [
    { id: 'en', name: 'English' },
    { id: 'fr', name: 'French' },
    { id: 'ca', name: 'Catalan' },
    { id: 'es', name: 'Spanish' },
  ];

  constructor(
    private sidenavService: SidenavService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.currentLang = this.translate.currentLang;
  }

  sidenavClose() {
    this.sidenavService.close();
  }

  changeLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }
}
