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
var berries_component_1 = require('./berries.component');
var startpage_component_1 = require('./startpage.component');
var berry_detail_component_1 = require('./berry-detail.component');
var profile_page_component_1 = require('./profile-page.component');
var liked_berries_component_1 = require('./liked-berries.component');
var latest_berries_component_1 = require('./latest-berries.component');
var add_berry_component_1 = require('./add-berry.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Smultronstället';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                berryplace_service_1.BerryPlaceService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/startpage',
                name: 'Startpage',
                component: startpage_component_1.StartpageComponent,
                useAsDefault: true
            },
            {
                path: '/berries',
                name: 'Berries',
                component: berries_component_1.BerriesComponent
            },
            {
                path: 'profile',
                name: 'Profile',
                component: profile_page_component_1.ProfilePageComponent
            },
            {
                path: 'mylikes',
                name: 'MyLikes',
                component: liked_berries_component_1.LikedBerriesComponent
            },
            {
                path: 'latest',
                name: 'Latest',
                component: latest_berries_component_1.LatestBerriesComponent
            },
            {
                path: 'add',
                name: 'Add',
                component: add_berry_component_1.AddBerryComponent
            },
            {
                path: '/detail/:id',
                name: 'BerryPlaceDetail',
                component: berry_detail_component_1.BerryDetailComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map