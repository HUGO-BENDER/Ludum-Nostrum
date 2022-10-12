import { Injectable } from '@angular/core';

import { FooterGateway } from '../../domain/footer-gateway';
import { FooterBlock, Metadata } from '../../domain/footer-model';

@Injectable({
  providedIn: 'root',
})
export class FooterHardcodeProviderService extends FooterGateway {
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
      version: '0.0.1',
    });
  }

  getFooterLinks(): Promise<FooterBlock[]> {
    const blockLearnig: FooterBlock = {
      id: 'learning',
      resourceToolTip: 'Learning',
      links: [],
    };
    const blockResources: FooterBlock = {
      id: 'resources',
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
      resourceToolTip: 'repository',
      resourceText: 'githubRepository',
    });
    blockLearnig.links.push({
      id: 'DDD',
      routerLink: 'ddd',
      resourceToolTip: 'DDDTitle',
      resourceText: 'DDDText',
    });
    //--------------------------
    blockResources.links.push({
      id: 'presskit',
      routerLink: 'presskit',
      resourceToolTip: 'presskitTitle',
      resourceText: 'presskitText',
    });
    blockResources.links.push({
      id: 'blog',
      href: 'https://blog.angular.io/',
      resourceToolTip: 'blogTitle',
      resourceText: 'blogText',
    });
    blockResources.links.push({
      id: 'analytics',
      routerLink: 'analytics',
      resourceToolTip: 'analyticsTitle',
      resourceText: 'analyticsText',
    });

    //--------------------------
    blockAboutUs.links.push({
      id: 'aboutUs',
      routerLink: 'page-about',
      resourceToolTip: 'aboutTitle',
      resourceText: 'aboutText',
    });
    blockAboutUs.links.push({
      id: 'contributors',
      routerLink: 'page-contributors',
      resourceToolTip: 'contributorsTitle',
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
