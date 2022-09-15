import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { MetadataGateway } from '../../domain/metadata-gateway';
import { Metadata } from '../../domain/metadata-model';

@Injectable({
  providedIn: 'root',
})

export class MetadataFirebaseProviderService extends MetadataGateway {
  constructor(public afs: AngularFirestore) {
    super();
  }

  getAppMetadata(): Promise<Metadata> {
    return this.afs
      .collection('App')
      .doc('Metadata')
      .ref.get()
      .then(function (d) {
        return Promise.resolve(<Metadata>d.data());
      });
  }
}
