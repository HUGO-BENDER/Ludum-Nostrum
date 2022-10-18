import { Component, OnInit } from '@angular/core';
import { FooterUsecaseService } from '../domain/footer-usecase.service';
import { FooterBlock, Metadata } from '../domain/footer-model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less'],
})
export class FooterComponent implements OnInit {
  infoMetadata!: Promise<Metadata>;
  linkBlocks!: Promise<FooterBlock[]>;

  constructor(private _providerUsercases: FooterUsecaseService) {}

  ngOnInit(): void {
    this.infoMetadata = this._providerUsercases.getAppMetadata();
    this.linkBlocks = this._providerUsercases.getFooterLinks();
  }
}
