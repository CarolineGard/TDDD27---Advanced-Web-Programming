import { Component } from '@angular/core';

import { BerryPlaceService } from './berryplace.service';
import { BerriesComponent } from './berries.component';
import { StartpageComponent } from './startpage.component';
import { BerryDetailComponent } from './berry-detail.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
	selector: 'my-app',
	template: `
		<a [routerLink]="['Startpage']"><h1>{{title}}</h1></a>
		<nav> 
			<a [routerLink]="['Berries']">Mina smultron</a>
			<p>Profil</p>
			<p>Mina likes</p>
			<p>Upptäck senaste</p>
			<p>Lägg till</p>
			<router-outlet></router-outlet>
			<my-berries></my-berries>
		</nav>
	`,
	styles: [`

	`],
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






















