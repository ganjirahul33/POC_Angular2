import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRouting} from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Home} from './home/home.component';
import {Dropdown} from './dropdown_boostrap/dropdown.component';
import { PeopleListComponent } from './datatable/people-list.component';
import { PersonDetailsComponent } from './datatable/person-details.component';
import {DataTableModule,InputTextModule,ButtonModule,DialogModule} from 'primeng/primeng';
import {PeopleService} from './datatable/people.service';

import {CarsComponent} from './cars/cars.component';
import {CarService} from './cars/carservice';

import {CustomPaginatorComponent} from './custom_paginator/custom.paginator.component';
import {CustomPaginator} from './custom_paginator/custom.paginator';

import {Vdatatable} from './vdatatable/vdatatable.component';

@NgModule({
  imports:      [ BrowserModule,
    AppRouting,FormsModule, HttpModule,DataTableModule,InputTextModule,ButtonModule,DialogModule
   ],
  declarations: [AppComponent,Home,Dropdown,PeopleListComponent,
  PersonDetailsComponent,CarsComponent,CustomPaginator,CustomPaginatorComponent,
  Vdatatable],
  bootstrap: [AppComponent],
  providers:[PeopleService,CarService]

})
export class AppModule { }
