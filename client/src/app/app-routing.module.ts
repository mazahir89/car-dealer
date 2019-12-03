import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarListComponent } from './components/car-list/car-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
