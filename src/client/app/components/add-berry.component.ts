import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';


@Component({
	selector: 'my-likes',
	templateUrl: './src/client/views/add-berry.component.html',
	styleUrls: ['./src/client/css/add-berry.component.css']
})

export class AddBerryComponent {
	title = 'Lägg till nytt smultron';

	constructor(private routeParams: RouteParams) { }
}