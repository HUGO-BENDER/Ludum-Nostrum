export interface Metadata {
  author: string;
  company: string;
  license: string;
  name: string;
  year: number;
  version: string;
}

export interface FooterBlock {
  id: string;
  resourceTitle: string;
  links: FooterLink[];
}

export interface FooterLink {
  id: string;
  href?: string;
  routerLink? : string;
  resourceTitle: string;
  resourceText: string;
}
