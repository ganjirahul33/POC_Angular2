"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var country_1 = require("./country");
var Dropdown = (function () {
    function Dropdown() {
        this.countries = [
            new country_1.Country(1, 'USA'),
            new country_1.Country(2, 'India'),
            new country_1.Country(3, 'Australia'),
            new country_1.Country(4, 'Brazil'),
            new country_1.Country(5, 'Russia')
        ];
    }
    Dropdown.prototype.ngOnInit = function () {
        this.selectedProject = this.countries[0].name;
        console.log("onInit");
        $(function () {
            var moveLeft = 20;
            var moveDown = 10;
            $('a#trigger').hover(function (e) {
                $('div#pop-up').show();
                $('div#pop-up').css('top', e.pageY - 60);
                $('div#pop-up').css('left', -e.pageY);
                // this.css('left', e.pageX + moveLeft)
                // .appendTo('body');
                console.log("e.pageY:" + e.pageY);
                console.log("e.pageX" + e.pageX);
                // $(".project-dropdown").css("overflow","");
                // $('div#pop-up').css('z-index', 9999);
                // let menuHegiht = $(".dropdown-menu").height();
                // console.log("menu height:"+menuHegiht);
            }, function () {
                $('div#pop-up').hide();
                // $(".project-dropdown").css("overflow","auto");
            });
            $('a#trigger').mousemove(function (e) {
                // $("div#pop-up").css('left', e.pageX + moveLeft);
                // .css('top', e.pageY + moveDown)
            });
        });
    };
    Dropdown.prototype.loadMore = function () {
        console.log("loading more");
        this.countries = [
            new country_1.Country(1, 'USA'),
            new country_1.Country(2, 'India'),
            new country_1.Country(3, 'Australia'),
            new country_1.Country(4, 'Brazil'),
            new country_1.Country(5, 'Russia'),
            new country_1.Country(6, 'aaa'),
            new country_1.Country(7, 'bbb'),
            new country_1.Country(8, 'ccc'),
            new country_1.Country(9, 'ddd'),
            new country_1.Country(10, 'eee'),
            new country_1.Country(11, 'fff'),
            new country_1.Country(12, 'ggg'),
            new country_1.Country(1, 'USA'),
            new country_1.Country(2, 'India'),
            new country_1.Country(3, 'Australia'),
            new country_1.Country(4, 'Brazil'),
            new country_1.Country(5, 'Russia'),
            new country_1.Country(6, 'aaa'),
            new country_1.Country(7, 'bbb'),
            new country_1.Country(8, 'ccc'),
            new country_1.Country(9, 'ddd'),
            new country_1.Country(10, 'eee'),
            new country_1.Country(11, 'fff'),
            new country_1.Country(12, 'ggg'),
            new country_1.Country(1, 'USA'),
            new country_1.Country(2, 'India'),
            new country_1.Country(3, 'Australia'),
            new country_1.Country(4, 'Brazil'),
            new country_1.Country(5, 'Russia'),
            new country_1.Country(6, 'aaa'),
            new country_1.Country(7, 'bbb'),
            new country_1.Country(8, 'ccc'),
            new country_1.Country(9, 'ddd'),
            new country_1.Country(10, 'eee'),
            new country_1.Country(11, 'fff'),
            new country_1.Country(12, 'ggg')
        ];
        setTimeout(function () {
            document.getElementById("menu1").click();
        }, 10);
        document.getElementById("menu1").click();
    };
    Dropdown.prototype.selectedItem = function (name) {
        console.log("item selected:" + name);
        this.selectedProject = name;
    };
    return Dropdown;
}());
Dropdown = __decorate([
    core_1.Component({
        selector: '<drop-down>',
        template: "    \n    <h2>Dropdown Example</h2>\n\n  <div id=\"dropdown-main-div\" class=\"dropdown\">\n  <!--<button class=\"btn btn-primary dropdown-toggle\" id=\"menu1\" type=\"button\" data-toggle=\"dropdown\"> -->\n    {{selectedProject}}<button class=\"dropdown-button-div\" id=\"menu1\" type=\"button\" data-toggle=\"dropdown\">\n    <span class=\"caret\"></span>\n    </button>\n    \n    \n    <ul class=\"dropdown-menu project-dropdown\" role=\"menu\" aria-labelledby=\"menu1\">\n        <div class=\"dropdown-header-div\">\n        <strong>Please pick a project</strong>\n        </div>\n      \n        <li *ngFor=\"let country of countries\" role=\"presentation\" (click)=\"selectedItem(country.name)\"><a href=\"#\" role=\"menuitem\" tabindex=\"-1\" >{{country.name}}</a></li>\n          \n        <div id=\"container\">\n            <a href=\"#\" id=\"trigger\" (click)=\"loadMore()\">See more...</a>\n        </div>\n    </ul>\n    <div id=\"pop-up\">\n        <b>Popup with list of all categories in alphabetical order if \"See more\" is selected\n        </b>\n    </div>\n     \n  </div>\n\n",
        styleUrls: ['app/dropdown_boostrap/dropdown.css']
    })
], Dropdown);
exports.Dropdown = Dropdown;
//# sourceMappingURL=dropdown.component.js.map