import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
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
  },
  {path: 'logout', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
