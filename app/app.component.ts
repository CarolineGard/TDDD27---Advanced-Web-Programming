import { Component } from '@angular/core';

import { BerryPlaceService } from './berryplace.service';
import { BerriesComponent } from './berries.component';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<div class="menubar"> 
			<a [routerLink]="['Berries']">Mina smultron</a>
			<p>Vänner</p>
			<p>Senaste</p>
			<p>Profil</p>
			<p>Mina likes</p>
			<router-outlet></router-outlet>
			<my-berries></my-berries>
		</div>
	`,
	styles: [`
		.menubar p {
			width: 50;
		}
	`],
	directives: [ROUTER_DIRECTIVES],
	providers: [ 
		ROUTER_PROVIDERS,
		BerryPlaceService
	]
})
@RouteConfig([
	{
		path: '/berries',
		name: 'Berries',
		component: BerriesComponent
	}
])
export class AppComponent {
	title = 'Smultronstället';
}
