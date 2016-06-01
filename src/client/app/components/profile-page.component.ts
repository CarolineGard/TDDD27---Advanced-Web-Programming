import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';


@Component({
	selector: 'my-profile',
	template: '<h1>{{title}}</h1>'
})

export class ProfilePageComponent {
	title = 'PROFILE PAGE';

	constructor(private routeParams: RouteParams) { }
}