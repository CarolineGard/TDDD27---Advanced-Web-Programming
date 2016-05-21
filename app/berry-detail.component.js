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
var berryplace_1 = require('./berryplace');
var BerryDetailComponent = (function () {
    function BerryDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', berryplace_1.BerryPlace)
    ], BerryDetailComponent.prototype, "berry", void 0);
    BerryDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-berry-detail',
            template: "\n\t<div *ngIf=\"berry\">\n\t <div>\n\t       <label>name: </label>\n\t       <input [(ngModel)]=\"berry.name\" placeholder=\"name\"><br><br>\n\t       <label>Where is it located? </label>\n\t       <input [(ngModel)]=\"berry.location\" placeholder=\"name\"><br><br>\n\t       <label>Category: </label>\n\t       <input [(ngModel)]=\"berry.category\" placeholder=\"name\"><br><br>\n\t       <label>Description: </label>\n\t       <input [(ngModel)]=\"berry.description\" placeholder=\"name\">\n       </div>\n\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], BerryDetailComponent);
    return BerryDetailComponent;
}());
exports.BerryDetailComponent = BerryDetailComponent;
//# sourceMappingURL=berry-detail.component.js.map