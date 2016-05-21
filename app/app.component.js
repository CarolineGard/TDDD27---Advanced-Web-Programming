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
var berry_detail_component_1 = require('./berry-detail.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Smultronstället';
        this.berries = BERRIES;
    }
    AppComponent.prototype.onSelect = function (berry) { this.selectedBerry = berry; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>Alla smultronst\u00E4llen:</h2>\n    <ul class=\"berries\">\n      <li *ngFor=\"let berry of berries\" [class.selected]=\"berry === selectedBerry\" (click)=\"onSelect(berry)\"> \n        <span class=\"badge\">{{berry.id}}</span> {{berry.name}}\n      </li>\n    </ul>\n    <my-berry-detail [berry]=\"selectedBerry\"></my-berry-detail>\n    ",
            styles: ["\n      .selected {\n        background-color: #cfd8ca !important;\n        color: white;\n      }\n      .berries li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n      }\n      .berries li.selected:hover {\n        background-color: #607D8B;\n      }\n      .berries li:hover {\n        background-color: #607DaB;\n      }\n    "],
            directives: [berry_detail_component_1.BerryDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var BERRIES = [
    { "id": 1, "name": "Nytorget", "location": "Stockholm", "category": "gata/torg", "description": "Good for sunny days" },
    { "id": 2, "name": "Hemma", "location": "Kungsholmen", "category": "private", "description": "Best place for a cup of tea" },
    { "id": 3, "name": "Cafe 60", "location": "Stockholm", "category": "Café/Restaurant", "description": "Cosy cafe located in the heart of the city with the worlds best chocolate cake!" },
    { "id": 4, "name": "Täppan", "location": "Norrköping", "category": "University", "description": "Cosy study place with cheep coffee" }
];
//# sourceMappingURL=app.component.js.map