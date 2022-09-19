import { Component } from '@angular/core';
import { SidenavService } from 'src/app/share/services/sidenav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {

  showMenuLanguage: boolean = false;
  currentUrl = '/home';
  currentLang!: string;
  loading = false;
  listLanguages = [
    { id: 'en', name: 'English' },
    { id: 'fr', name: 'French' },
    { id: 'ca', name: 'Catalan' },
    { id: 'es', name: 'Spanish' }
  ];

  constructor(private sidenavService: SidenavService) { }

  sidenavClose(){
    this.sidenavService.close();
  }

  changeLanguage(lang: string) {
    this.currentLang = lang;
    //  this.translate.use(lang);
  }
}
