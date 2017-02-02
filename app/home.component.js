"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var country_1 = require("./country");
var Home = (function () {
    function Home() {
        this.countries = [
            new country_1.Country(1, 'USA'),
            new country_1.Country(2, 'India'),
            new country_1.Country(3, 'Australia'),
            new country_1.Country(4, 'Brazil'),
            new country_1.Country(5, 'Russia')
        ];
    }
    return Home;
}());
Home = __decorate([
    core_1.Component({
        templateUrl: 'app/home.html'
    })
], Home);
exports.Home = Home;
//# sourceMappingURL=home.component.js.map