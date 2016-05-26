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
var berry_detail_component_1 = require('./berry-detail.component');
var berryplace_service_1 = require('./berryplace.service');
var BerriesComponent = (function () {
    function BerriesComponent(router, berryplaceService) {
        this.router = router;
        this.berryplaceService = berryplaceService;
        this.title = 'Smultronstället';
    }
    BerriesComponent.prototype.getBerries = function () {
        var _this = this;
        this.berryplaceService.getBerries().then(function (berries) { return _this.berries = berries; });
    };
    BerriesComponent.prototype.ngOnInit = function () {
        this.getBerries();
    };
    BerriesComponent.prototype.onSelect = function (berry) { this.selectedBerry = berry; };
    BerriesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['BerryPlaceDetail', { id: this.selectedBerry.id }]);
    };
    BerriesComponent = __decorate([
        core_1.Component({
            selector: 'my-berries',
            templateUrl: 'app/berries.component.html',
            styleUrls: ['app/berries.component.css'],
            directives: [berry_detail_component_1.BerryDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, berryplace_service_1.BerryPlaceService])
    ], BerriesComponent);
    return BerriesComponent;
}());
exports.BerriesComponent = BerriesComponent;
//# sourceMappingURL=berries.component.js.map