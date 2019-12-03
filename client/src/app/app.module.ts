import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { HttpClientModule } from "@angular/common/http";
import { CarListComponent } from "./components/car-list/car-list.component";

import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from "@angular/material";
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { AddCarComponent } from './components/add-car/add-car.component';

@NgModule({
  declarations: [AppComponent, CarListComponent, CarEditComponent, AddCarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
