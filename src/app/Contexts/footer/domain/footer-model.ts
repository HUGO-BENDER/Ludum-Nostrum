export interface Metadata {
  profileAuthor: ProfileAuthor;
  company: string;
  license: string;
  name: string;
  year: number;
  version: string;
}

export interface ProfileAuthor{
  name: string;
  job: string;
  email: string;
}

export interface FooterBlock {
  id: string;
  resourceToolTip: string;
  links: FooterLink[];
}

export interface FooterLink {
  id: string;
  href?: string;
  routerLink?: string;
  resourceToolTip: string;
  resourceText: string;
}
