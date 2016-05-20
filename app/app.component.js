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
var BerryPlace = (function () {
    function BerryPlace() {
    }
    return BerryPlace;
}());
exports.BerryPlace = BerryPlace;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Smultronstället';
        this.berries = BERRIES;
    }
    AppComponent.prototype.onSelect = function (berry) { this.selectedBerry = berry; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \t<h1>{{title}}</h1>\n  \t<h2>Alla smultronst\u00E4llen:</h2>\n  \t<ul class=\"berries\">\n  \t\t<li *ngFor=\"let berry of berries\" [class.selected]=\"berry === selectedBerry\" (click)=\"onSelect(berry)\"> \n  \t\t\t<span class=\"badge\">{{berry.id}}</span> {{berry.name}}\n  \t\t</li>\n  \t</ul>\n  \t<div *ngIf=\"selectedBerry\">\n  \t\t<div>\n\t\t \t<label>name: </label>\n\t\t \t<input [(ngModel)]=\"selectedBerry.name\" placeholder=\"name\"><br><br>\n\t\t \t<label>Where is it located? </label>\n\t\t \t<input [(ngModel)]=\"selectedBerry.location\" placeholder=\"name\"><br><br>\n\t\t \t<label>Category: </label>\n\t\t \t<input [(ngModel)]=\"selectedBerry.category\" placeholder=\"name\"><br><br>\n\t\t \t<label>Description: </label>\n\t\t \t<input [(ngModel)]=\"selectedBerry.description\" placeholder=\"name\">\n\t\t \t</div>\n\t\t</div>\n  \t",
            styles: ["\n  \t\t.selected {\n  \t\t\tbackground-color: #cfd8ca !important;\n  \t\t\tcolor: white;\n  \t\t}\n  \t\t.berries li {\n  \t\t\tcursor: pointer;\n  \t\t\tposition: relative;\n  \t\t\tleft: 0;\n  \t\t}\n  \t\t.berries li.selected:hover {\n  \t\t\tbackground-color: #607D8B;\n  \t\t}\n  \t\t.berries li:hover {\n  \t\t\tbackground-color: #607DaB;\n  \t\t}\n  \t"]
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