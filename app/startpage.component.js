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
var StartpageComponent = (function () {
    function StartpageComponent(router, berryplaceService) {
        this.router = router;
        this.berryplaceService = berryplaceService;
        this.berries = [];
    }
    StartpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.berryplaceService.getBerries().then(function (berries) { return _this.berries = berries.slice(0, 5); });
    };
    StartpageComponent.prototype.gotoDetail = function (berry) {
        var link = ['BerryPlaceDetail', { id: berry.id }];
        this.router.navigate(link);
    };
    StartpageComponent = __decorate([
        core_1.Component({
            selector: 'my-startpage',
            templateUrl: 'app/startpage.component.html',
            styleUrls: ['app/startpage.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, berryplace_service_1.BerryPlaceService])
    ], StartpageComponent);
    return StartpageComponent;
}());
exports.StartpageComponent = StartpageComponent;
//# sourceMappingURL=startpage.component.js.map