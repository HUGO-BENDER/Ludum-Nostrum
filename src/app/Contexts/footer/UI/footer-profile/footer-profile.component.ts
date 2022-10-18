import { Component, Input } from '@angular/core';
import { ProfileAuthor } from './../../domain/footer-model';

@Component({
  selector: 'app-footer-profile',
  templateUrl: './footer-profile.component.html',
  styleUrls: ['./footer-profile.component.less']
})
export class FooterProfileComponent  {

  @Input() profile!: ProfileAuthor|undefined;

  constructor() { }

}
