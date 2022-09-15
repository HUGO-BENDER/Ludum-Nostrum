import { Metadata } from './../domain/metadata-model';
import { Component, OnInit } from '@angular/core';
import { MetadataUsecaseService } from '../domain/metadata-usecase.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  infoMetadata!: Promise<Metadata>;

  constructor(private _providerUsercases: MetadataUsecaseService) { }

  ngOnInit(): void {
    this.infoMetadata = this._providerUsercases.getAppMetadata();
  }

}
