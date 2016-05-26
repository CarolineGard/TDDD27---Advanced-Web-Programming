import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { BerryPlace } from './berryplace';
import { BerryPlaceService } from './berryplace.service';



@Component({
	selector: 'my-startpage',
	templateUrl: 'app/startpage.component.html' 
})
export class StartpageComponent implements OnInit{ 
	berries: BerryPlace[] = [];
	
	constructor( 
		private router: Router,
		private berryplaceService: BerryPlaceService ) {
		}

	ngOnInit() {
		this.berryplaceService.getBerries().then(berries => this.berries = berries.slice(0, 2));
	}

	gotoDetail( berry: BerryPlace ) { 
		let link = ['BerryPlaceDetail', { id: berry.id }];
		this.router.navigate(link);
	}
}