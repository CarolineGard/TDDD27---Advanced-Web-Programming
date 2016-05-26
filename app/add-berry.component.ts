import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';


@Component({
	selector: 'my-likes',
	template: '<h1>{{title}}</h1>'
})

export class AddBerryComponent {
	title = 'MINA LIKES';

	constructor(private routeParams: RouteParams) { }
}