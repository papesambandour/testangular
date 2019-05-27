import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailspostComponent} from './detailspost/detailspost.component';
import {DetailuserComponent} from './detailuser/detailuser.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent

  },
  {
    path: 'detailspost/:id/:userid',
    component : DetailspostComponent

  },{
    path: 'detailsuser/:id',
    component : DetailuserComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
