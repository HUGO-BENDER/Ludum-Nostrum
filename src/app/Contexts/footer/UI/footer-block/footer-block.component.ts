import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-block',
  templateUrl: './footer-block.component.html',
  styleUrls: ['./footer-block.component.less']
})
export class FooterBlockComponent implements OnInit {


  @Input() block!: any;


  constructor() { }

  ngOnInit(): void {
  }

}
