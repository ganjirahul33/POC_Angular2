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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var CustomPaginator = (function () {
    function CustomPaginator() {
        this.rows = 2;
        this.pageLinkSize = 5;
        this.onPageChange = new core_1.EventEmitter();
        this._totalRecords = 6;
        this._first = 0;
    }
    Object.defineProperty(CustomPaginator.prototype, "totalRecords", {
        get: function () {
            return this._totalRecords;
        },
        set: function (val) {
            this._totalRecords = val;
            this.updatePageLinks();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomPaginator.prototype, "first", {
        get: function () {
            return this._first;
        },
        set: function (val) {
            this._first = val;
            this.updatePageLinks();
        },
        enumerable: true,
        configurable: true
    });
    CustomPaginator.prototype.isFirstPage = function () {
        return this.getPage() === 0;
    };
    CustomPaginator.prototype.isLastPage = function () {
        return this.getPage() === this.getPageCount() - 1;
    };
    CustomPaginator.prototype.getPageCount = function () {
        return Math.ceil(this.totalRecords / this.rows) || 1;
    };
    CustomPaginator.prototype.calculatePageLinkBoundaries = function () {
        var numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
        //calculate range, keep current in middle if necessary
        var start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
        //check when approaching to last page
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);
        return [start, end];
    };
    CustomPaginator.prototype.updatePageLinks = function () {
        this.pageLinks = [];
        var boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
        for (var i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
    };
    CustomPaginator.prototype.changePage = function (p, event) {
        var pc = this.getPageCount();
        console.log("OnChange fired:p:" + p + ",  event:" + event);
        if (p >= 0 && p < pc) {
            this.first = this.rows * p;
            var state = {
                page: p,
                first: this.first,
                rows: this.rows,
                pageCount: pc
            };
            this.updatePageLinks();
            this.onPageChange.emit(state);
            console.log(state);
            this.callBack(state.page);
        }
        if (event) {
            event.preventDefault();
        }
    };
    CustomPaginator.prototype.getPage = function () {
        return Math.floor(this.first / this.rows);
        // return 2;
    };
    CustomPaginator.prototype.changePageToFirst = function (event) {
        this.changePage(0, event);
    };
    CustomPaginator.prototype.changePageToPrev = function (event) {
        this.changePage(this.getPage() - 1, event);
    };
    CustomPaginator.prototype.changePageToNext = function (event) {
        this.changePage(this.getPage() + 1, event);
    };
    CustomPaginator.prototype.changePageToLast = function (event) {
        this.changePage(this.getPageCount() - 1, event);
    };
    CustomPaginator.prototype.onRppChange = function (event) {
        this.rows = this.rowsPerPageOptions[event.target.selectedIndex];
        this.changePageToFirst(event);
    };
    return CustomPaginator;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CustomPaginator.prototype, "rows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], CustomPaginator.prototype, "pageLinkSize", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CustomPaginator.prototype, "onPageChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CustomPaginator.prototype, "style", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CustomPaginator.prototype, "styleClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CustomPaginator.prototype, "rowsPerPageOptions", void 0);
__decorate([
    core_1.Input('cb'),
    __metadata("design:type", Object)
], CustomPaginator.prototype, "callBack", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], CustomPaginator.prototype, "totalRecords", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], CustomPaginator.prototype, "first", null);
CustomPaginator = __decorate([
    core_1.Component({
        selector: 'p-paginator',
        templateUrl: 'app/custom_paginator/paginator.html',
        styleUrls: ['app/custom_paginator/paginator.css']
    })
], CustomPaginator);
exports.CustomPaginator = CustomPaginator;
var PaginatorModule = (function () {
    function PaginatorModule() {
    }
    return PaginatorModule;
}());
PaginatorModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        exports: [CustomPaginator],
        declarations: [CustomPaginator]
    })
], PaginatorModule);
exports.PaginatorModule = PaginatorModule;
//# sourceMappingURL=custom.paginator.js.map