import { Component, Input, OnInit } from '@angular/core';
import { FooterBlock } from '../../domain/footer-model';

@Component({
  selector: 'app-footer-block',
  templateUrl: './footer-block.component.html',
  styleUrls: ['./footer-block.component.less']
})
export class FooterBlockComponent implements OnInit {


  @Input() block!: FooterBlock;


  constructor() { }

  ngOnInit(): void {
  }

}
