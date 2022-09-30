import { FooterBlock, Metadata } from './footer-model';

export abstract class FooterGateway {
  abstract getAppMetadata(): Promise<Metadata>;

  abstract getFooterLinks(): Promise<FooterBlock[]>;

}
