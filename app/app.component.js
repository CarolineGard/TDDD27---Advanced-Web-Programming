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
var berries_component_1 = require('./berries.component');
var startpage_component_1 = require('./startpage.component');
var berry_detail_component_1 = require('./berry-detail.component');
var router_deprecated_1 = require('@angular/router-deprecated');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Smultronstället';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n\t\t<a [routerLink]=\"['Startpage']\"><h1>{{title}}</h1></a>\n\t\t<nav> \n\t\t\t<a [routerLink]=\"['Berries']\">Mina smultron</a>\n\t\t\t<p>Profil</p>\n\t\t\t<p>Mina likes</p>\n\t\t\t<p>Uppt\u00E4ck senaste</p>\n\t\t\t<p>L\u00E4gg till</p>\n\t\t\t<router-outlet></router-outlet>\n\t\t\t<my-berries></my-berries>\n\t\t</nav>\n\t",
            styles: ["\n\n\t"],
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