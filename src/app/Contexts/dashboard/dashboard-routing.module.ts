import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './UI/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '**', component: DashboardComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule { }
