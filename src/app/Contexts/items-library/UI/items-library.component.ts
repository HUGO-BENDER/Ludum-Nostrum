import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-library',
  templateUrl: './items-library.component.html',
  styleUrls: ['./items-library.component.less']
})
export class ItemsLibraryComponent implements OnInit {

  library = [1,2,3,4,5];

  constructor() { }

  ngOnInit(): void {
  }

}
