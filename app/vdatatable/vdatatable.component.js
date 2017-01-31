"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var country_list_1 = require("./country.list");
var Vdatatable = (function () {
    function Vdatatable() {
        // countries = [
        //  new Country(1, 'USA' ),
        //  new Country(2, 'India' ),
        //  new Country(3, 'Australia' ),
        //  new Country(4, 'Brazil'),
        //  new Country(5, 'Russia'),
        //  new Country(6, 'Russia1'),
        //  new Country(7, 'Russia2')
        // ];
        this.countries = country_list_1.countryList[0];
    }
    Vdatatable.prototype.ngOnInit = function () {
        console.log("onInt");
    };
    Vdatatable.prototype.callback = function () {
        var _this = this;
        return function (page) {
            _this.countries = country_list_1.countryList[page];
            console.log("page:" + page);
            console.log("countries:" + _this.countries);
        };
    };
    return Vdatatable;
}());
Vdatatable = __decorate([
    core_1.Component({
        templateUrl: 'app/vdatatable/vdatatable.html',
        styleUrls: ['app/vdatatable/vdatatable.css']
    })
], Vdatatable);
exports.Vdatatable = Vdatatable;
//# sourceMappingURL=vdatatable.component.js.map