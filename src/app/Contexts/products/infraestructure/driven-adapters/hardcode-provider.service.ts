import { Injectable } from '@angular/core';
import { ProductGateway } from '../../domain/product-gateway';
import { Product } from '../../domain/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductHardcodeProviderService extends ProductGateway {
  constructor() {/products/
    super();
  }

  getProductList(): Promise<Product[]> {
    const product01: Product = {
      id: 'chess',
      isActive: true,
      title: 'Products.Chess.Title',
      subtitle: 'Products.Chess.Subtitle',
      iconPath: '../../../assets/products/chess/icon_chess.png',
      bkPath: '../../../assets/products/chess/bkChess.png',
      description: 'Products.Chess.Description',
      url: ''
    }
    const product02: Product = {
      id: 'dev001-plague',
      isActive: true,
      title: 'Products.Dev001-Plague.Title',
      subtitle: 'Products.Dev001-Plague.Subtitle',
      iconPath: '../../../assets/products/dev001-plague/icon.jpg',
      bkPath: '../../../assets/products/dev001-plague/dev001-plague.png',
      description: 'Products.Dev001-Plague.Description',
      url: 'https://dev001-ng-flow.web.app/'
    }
    const product03: Product = {
      id: 'dev002-plague',
      isActive: true,
      title: 'Products.Dev002-Plague.Title',
      subtitle: 'Products.Dev002-Plague.Subtitle',
      iconPath: '../../../assets/products/dev001-plague/icon.jpg',
      bkPath: '../../../assets/products/dev001-plague/dev001-plague.png',
      description: 'Products.Dev002-Plague.Description',
      url: ''
    }
    const product04: Product = {
      id: 'plague',
      isActive: true,
      title: 'Products.Plague.Title',
      subtitle: 'Products.Plague.Subtitle',
      iconPath: '../../../assets/products/emptyIcon.svg',
      bkPath: '../../../assets/products/plague/plague.png',
      description: 'Products.Plague.Description',
      url: ''
    }
    const product10: Product = {
      id: '10',
      isActive: true,
      title: 'Lorem ipsum',
      subtitle: 'Mea munere antiopam at',
      iconPath: '../../../assets/products/emptyIcon.svg',
      bkPath: '../../../assets/products/empty300x300.jpg',
      description: 'Lorem ipsum dolor sit amet, eos nemore nostrud vivendum ea, soluta sententiae ea nec. Mea munere antiopam at, mea euismod quaestio recteque ne',
      url: ''
    }
    return Promise.resolve(<Product[]>[
        product01,
        product02,
        product03,
        product04,
        product10,
        product10,
        product10,
        product10
    ])
  }
}
