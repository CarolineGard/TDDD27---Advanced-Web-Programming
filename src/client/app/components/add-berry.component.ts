import { Component } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import {Http, HTTP_PROVIDERS} from '@angular/http';


@Component({
	selector: 'my-addnew',
	templateUrl: './src/client/views/add-berry.component.html',
	styleUrls: ['./src/client/css/add-berry.component.css']
})

export class AddBerryComponent {
	title = 'Lägg till nytt smultron';

	constructor(private routeParams: RouteParams) { }
}