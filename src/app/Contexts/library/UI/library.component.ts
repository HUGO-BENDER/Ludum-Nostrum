import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.less']
})
export class LibraryComponent implements OnInit {

  library = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

}
