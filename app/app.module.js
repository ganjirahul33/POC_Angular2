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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var home_component_1 = require('./home.component');
var dropdown_component_1 = require('./dropdown_boostrap/dropdown.component');
var people_list_component_1 = require('./datatable/people-list.component');
var person_details_component_1 = require('./datatable/person-details.component');
var primeng_1 = require('primeng/primeng');
var people_service_1 = require('./datatable/people.service');
var cars_component_1 = require('./cars/cars.component');
var carservice_1 = require('./cars/carservice');
var custom_paginator_component_1 = require('./custom_paginator/custom.paginator.component');
var custom_paginator_1 = require('./custom_paginator/custom.paginator');
var vdatatable_component_1 = require('./vdatatable/vdatatable.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                app_routing_module_1.AppRouting, forms_1.FormsModule, http_1.HttpModule, primeng_1.DataTableModule, primeng_1.InputTextModule, primeng_1.ButtonModule, primeng_1.DialogModule
            ],
            declarations: [app_component_1.AppComponent, home_component_1.Home, dropdown_component_1.Dropdown, people_list_component_1.PeopleListComponent,
                person_details_component_1.PersonDetailsComponent, cars_component_1.CarsComponent, custom_paginator_1.CustomPaginator, custom_paginator_component_1.CustomPaginatorComponent,
                vdatatable_component_1.Vdatatable],
            bootstrap: [app_component_1.AppComponent],
            providers: [people_service_1.PeopleService, carservice_1.CarService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map