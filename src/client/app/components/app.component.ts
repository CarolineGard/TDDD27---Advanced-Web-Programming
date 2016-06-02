import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BerryPlaceService } from './berryplace.service';
import { BerriesComponent } from './berries.component';
import { StartpageComponent } from './startpage.component';
import { BerryDetailComponent } from './berry-detail.component';
import { ProfilePageComponent } from './profile-page.component';
import { LikedBerriesComponent } from './liked-berries.component';
import { LatestBerriesComponent } from './latest-berries.component';
import { AddBerryComponent } from './add-berry.component';

@Component({
	selector: 'my-app',
	templateUrl: './src/client/views/app.component.html',
	styleUrls: ['./src/client/css/app.component.css'],
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
		path: 'profile',
		name: 'Profile',
		component: ProfilePageComponent
	},
	{
		path: 'mylikes',
		name: 'MyLikes',
		component: LikedBerriesComponent
	},
	{
		path: 'latest',
		name: 'Latest',
		component: LatestBerriesComponent
	},
	{
		path: 'add',
		name: 'Add',
		component: AddBerryComponent
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






















