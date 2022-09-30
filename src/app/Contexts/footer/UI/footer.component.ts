import { Metadata } from '../domain/footer-model';
import { Component, OnInit } from '@angular/core';
import { FooterUsecaseService } from '../domain/footer-usecase.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent implements OnInit {
  infoMetadata!: Promise<Metadata>;

  constructor(private _providerUsercases: FooterUsecaseService) {}

  ngOnInit(): void {
    this.infoMetadata = this._providerUsercases.getAppMetadata();
  }
}
