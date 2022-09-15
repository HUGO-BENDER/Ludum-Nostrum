import { Injectable } from '@angular/core';
import { MetadataGateway } from '../../domain/metadata-gateway';
import { Metadata } from '../../domain/metadata-model';

@Injectable({
  providedIn: 'root',
})
export class MetadataHardcodeProviderService extends MetadataGateway {
  constructor() {
    super();
  }

  getAppMetadata(): Promise<Metadata> {
    return Promise.resolve(<Metadata>{
      author: 'Local Developer',
      company: 'Local Company',
      license: 'License Free and Open-source',
      name: 'Application Name',
      year: 2023,
      version: '0.0.1'
    })
  }
}
