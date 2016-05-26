import { Component } from '@angular/core';

import { BerryPlaceService } from './berryplace.service';
import { BerriesComponent } from './berries.component';
import { StartpageComponent } from './startpage.component';
import { BerryDetailComponent } from './berry-detail.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [ 
		ROUTER_PROVIDERS,
		BerryPlaceService
	]
})
@RouteConfig([
	{
		path: '/startpage',
		name: 'Startpage',
		component: StartpageComponent,
		useAsDefault: true
	},
	{
		path: '/berries',
		name: 'Berries',
		component: BerriesComponent
	},
	{
		path: '/detail/:id',
		name: 'BerryPlaceDetail',
		component: BerryDetailComponent
	}
])
export class AppComponent {
	title = 'Smultronstället';
}






















