import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';


@Component({
	selector: 'my-likes',
	templateUrl: 'app/add-berry.component.html',
	styleUrls: ['app/add-berry.component.css']
})

export class AddBerryComponent {
	title = 'Add a new berry';

	constructor(private routeParams: RouteParams) { }
}