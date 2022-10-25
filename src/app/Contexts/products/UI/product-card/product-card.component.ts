import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less'],
})
export class ProductCardComponent {
  @Input() product!: any;

  constructor() {}

  navigateTo(url: string) {
    if (this.product.url) {
      window.open(this.product.url, "blank")
    } else {
      alert(this.product.id + " todavía está en fase de desarrollo.");
    }
  }
}
