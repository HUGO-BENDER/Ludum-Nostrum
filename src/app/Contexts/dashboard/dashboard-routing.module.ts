import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './UI/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '**', component: HomeComponent },
    ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule { }
