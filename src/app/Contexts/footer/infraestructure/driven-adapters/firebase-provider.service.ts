import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { FooterGateway } from '../../domain/footer-gateway';
import { FooterBlock, Metadata } from '../../domain/footer-model';

@Injectable({
  providedIn: 'root',
})
export class FooterFirebaseProviderService extends FooterGateway {
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

  getFooterLinks(): Promise<FooterBlock[]> {
    const blockLearnig: FooterBlock = {
      id: 'Learning',
      resourceToolTip: 'Learning',
      links: [],
    };
    const blockResources: FooterBlock = {
      id: 'Resources',
      resourceToolTip: 'Resources',
      links: [],
    };
    const blockAboutUs: FooterBlock = {
      id: 'AboutUs',
      resourceToolTip: 'AboutUs',
      links: [],
    };
    //------------------------------------
    blockLearnig.links.push({
      id: 'GIT',
      href: 'https://github.com/HUGO-BENDER/Ludum-Nostrum.git',
      resourceToolTip: 'GITTooltip',
      resourceText: 'GITText',
    });
    blockLearnig.links.push({
      id: 'DDD',
      routerLink: 'ddd',
      resourceToolTip: 'DDDToolTip',
      resourceText: 'DDDText',
    });
    blockLearnig.links.push({
      id: 'MicroServices',
      routerLink: 'MicroServices',
      resourceToolTip: 'MicroServicesToolTip',
      resourceText: 'MicroServicesText',
    });
    blockLearnig.links.push({
      id: 'Testing',
      routerLink: 'Test',
      resourceToolTip: 'TestToolTip',
      resourceText: 'TestText',
    });
    //--------------------------
    blockResources.links.push({
      id: 'presskit',
      routerLink: 'presskit',
      resourceToolTip: 'presskitToolTip',
      resourceText: 'presskitText',
    });
    blockResources.links.push({
      id: 'blog',
      href: 'https://blog.angular.io/',
      resourceToolTip: 'blogToolTip',
      resourceText: 'blogText',
    });
    blockResources.links.push({
      id: 'analytics',
      routerLink: 'analytics',
      resourceToolTip: 'analyticsToolTip',
      resourceText: 'analyticsText',
    });

    //--------------------------
    blockAboutUs.links.push({
      id: 'aboutUs',
      routerLink: 'page-about',
      resourceToolTip: 'aboutToolTip',
      resourceText: 'aboutText',
    });
    blockAboutUs.links.push({
      id: 'contributors',
      routerLink: 'page-contributors',
      resourceToolTip: 'contributorsToolTip',
      resourceText: 'contributorsText',
    });
    // blockxxx.links.push(
    //   {
    //     id: '',
    //     href: '',
    //     routerLink: '',
    //     resourceToolTip: '',
    //     resourceText: ''
    //   }
    // )

    return Promise.resolve(<FooterBlock[]>[
      blockLearnig,
      blockAboutUs,
      blockResources,
    ]);
  }
}
