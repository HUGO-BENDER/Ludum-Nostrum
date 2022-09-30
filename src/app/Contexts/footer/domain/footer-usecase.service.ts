import { Injectable } from '@angular/core';
import { FooterGateway } from './footer-gateway';
import { Metadata } from './footer-model';

@Injectable({
  providedIn: 'root',
})
export class FooterUsecaseService {
  constructor(private _providerMetadataGateway: FooterGateway) {}

  getAppMetadata(): Promise<Metadata> {
    return this._providerMetadataGateway.getAppMetadata();
  }

  getFooterLinks(): Promise<FooterBlock[]> {
    return this._providerMetadataGateway.getFooterLinks();
  }

}
