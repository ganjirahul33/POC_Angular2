"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var dropdown_component_1 = require('./dropdown_boostrap/dropdown.component');
var home_component_1 = require('./home.component');
var people_list_component_1 = require('./datatable/people-list.component');
var person_details_component_1 = require('./datatable/person-details.component');
var cars_component_1 = require('./cars/cars.component');
var custom_paginator_component_1 = require('./custom_paginator/custom.paginator.component');
var vdatatable_component_1 = require('./vdatatable/vdatatable.component');
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.Home },
    { path: 'dropdown', component: dropdown_component_1.Dropdown },
    { path: 'persons', component: people_list_component_1.PeopleListComponent },
    { path: 'persons/:id', component: person_details_component_1.PersonDetailsComponent },
    { path: 'cars', component: cars_component_1.CarsComponent },
    { path: 'custompaginator', component: custom_paginator_component_1.CustomPaginatorComponent },
    { path: 'vdatatable', component: vdatatable_component_1.Vdatatable }
];
var AppRouting = (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRouting);
    return AppRouting;
}());
exports.AppRouting = AppRouting;
//# sourceMappingURL=app-routing.module.js.map