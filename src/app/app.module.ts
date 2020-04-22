import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { HomeListComponent } from './home-list/home-list.component';
import { HomeInputComponent } from './home-input/home-input.component';
import { HomeEditComponent } from './home-edit/home-edit.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES:Routes = [
  { path:'home-list', component : HomeListComponent},
  { path:'home-input', component : HomeInputComponent},
  { path:'home-edit', component : HomeEditComponent}
]
@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot(ROUTES)
    ],
  declarations: [ AppComponent, HelloComponent, HomeListComponent, HomeInputComponent, HomeEditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
