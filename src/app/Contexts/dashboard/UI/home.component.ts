import { Component, OnInit } from '@angular/core';
import { JumbotronComponent } from './jumbotron/jumbotron.component'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}