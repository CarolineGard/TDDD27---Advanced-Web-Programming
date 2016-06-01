import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';


@Component({
	selector: 'my-latest',
	template: '<h1>{{title}}</h1>'
})

export class LatestBerriesComponent {
	title = 'Upptäck senaste';

	constructor(private routeParams: RouteParams) { }
}