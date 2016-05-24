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
var mock_berries_1 = require('./mock-berries');
var BerryPlaceService = (function () {
    function BerryPlaceService() {
    }
    BerryPlaceService.prototype.getBerries = function () {
        return Promise.resolve(mock_berries_1.BERRIES);
    };
    BerryPlaceService.prototype.getBerry = function (id) {
        return Promise.resolve(mock_berries_1.BERRIES).then(function (berries) { return berries.filter(function (berry) { return berry.id === id; })[0]; });
    };
    // See the "Take it slow" appendix
    BerryPlaceService.prototype.getBerriesSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_berries_1.BERRIES); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    BerryPlaceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BerryPlaceService);
    return BerryPlaceService;
}());
exports.BerryPlaceService = BerryPlaceService;
//# sourceMappingURL=berryplace.service.js.map