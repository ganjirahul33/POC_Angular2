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
var country_1 = require('./country');
var Vdatatable = (function () {
    function Vdatatable() {
        this.countries = [
            new country_1.Country(1, 'USA'),
            new country_1.Country(2, 'India'),
            new country_1.Country(3, 'Australia'),
            new country_1.Country(4, 'Brazil'),
            new country_1.Country(5, 'Russia'),
            new country_1.Country(6, 'Russia1'),
            new country_1.Country(7, 'Russia2')
        ];
    }
    Vdatatable.prototype.ngOnInit = function () {
    };
    Vdatatable = __decorate([
        core_1.Component({
            templateUrl: 'app/vdatatable/vdatatable.html',
            styleUrls: ['app/vdatatable/vdatatable.css']
        }), 
        __metadata('design:paramtypes', [])
    ], Vdatatable);
    return Vdatatable;
}());
exports.Vdatatable = Vdatatable;
//# sourceMappingURL=vdatatable.component.js.map