import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {Dropdown} from './dropdown_boostrap/dropdown.component';
import {Home} from './home.component';
import { PeopleListComponent } from './datatable/people-list.component';
import { PersonDetailsComponent } from './datatable/person-details.component';
import {CarsComponent} from './cars/cars.component';
import {CustomPaginatorComponent} from './custom_paginator/custom.paginator.component';
import {Vdatatable} from './vdatatable/vdatatable.component';

const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:Home},
    {path:'dropdown',component:Dropdown},
    {path: 'persons',component: PeopleListComponent}, 
    {path: 'persons/:id',component: PersonDetailsComponent},
    {path: 'cars',component: CarsComponent},
    {path: 'custompaginator',component: CustomPaginatorComponent},
    {path: 'vdatatable', component: Vdatatable}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouting {

}