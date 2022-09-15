import { Injectable } from '@angular/core';
import { MetadataGateway  } from './metadata-gateway'
import { Metadata } from './metadata-model';


@Injectable({
  providedIn: 'root'
})

export class MetadataUsecaseService {

  constructor(private _providerMetadataGateway: MetadataGateway) {
  }

  getAppMetadata(): Promise<Metadata> {
    return this._providerMetadataGateway.getAppMetadata();
  }
}
