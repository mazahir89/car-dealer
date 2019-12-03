import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { AddCarComponent } from './components/add-car/add-car.component';


const routes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'car-list',
    component: CarListComponent
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent
  },
  {
    path: 'add-car',
    component: AddCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
