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
var berryplace_service_1 = require('./berryplace.service');
var StartpageComponent = (function () {
    function StartpageComponent(berryplaceService) {
        this.berryplaceService = berryplaceService;
        this.berries = [];
    }
    StartpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.berryplaceService.getBerries().then(function (berries) { return _this.berries.slice(1, 5); });
    };
    StartpageComponent.prototype.gotoDetail = function () { };
    StartpageComponent = __decorate([
        core_1.Component({
            selector: 'my-startpage',
            templateUrl: 'app/startpage.component.html'
        }), 
        __metadata('design:paramtypes', [berryplace_service_1.BerryPlaceService])
    ], StartpageComponent);
    return StartpageComponent;
}());
exports.StartpageComponent = StartpageComponent;
//# sourceMappingURL=startpage.component.js.map