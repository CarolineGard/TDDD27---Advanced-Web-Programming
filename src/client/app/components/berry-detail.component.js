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
var router_deprecated_1 = require('@angular/router-deprecated');
var berryplace_service_1 = require('./berryplace.service');
var BerryDetailComponent = (function () {
    function BerryDetailComponent(berryplaceService, routeParams) {
        this.berryplaceService = berryplaceService;
        this.routeParams = routeParams;
    }
    BerryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.berryplaceService.getBerry(id).then(function (berry) { return _this.berry = berry; });
    };
    BerryDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    BerryDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-berry-detail',
            templateUrl: 'app/berry-detail.component.html',
            styleUrls: ['app/berry-detail.component.css']
        }), 
        __metadata('design:paramtypes', [berryplace_service_1.BerryPlaceService, router_deprecated_1.RouteParams])
    ], BerryDetailComponent);
    return BerryDetailComponent;
}());
exports.BerryDetailComponent = BerryDetailComponent;
//# sourceMappingURL=berry-detail.component.js.map