import { Component, OnInit } from '@angular/core';

import { BerryPlace } from './berryplace';
import { BerryPlaceService } from './berryplace.service';


@Component({
	selector: 'my-startpage',
	templateUrl: 'app/startpage.component.html'
})
export class StartpageComponent { 
	berries: BerryPlace[] = [];
	
	constructor( private berryplaceService: BerryPlaceService ) { }

	ngOnInit() {
		this.berryplaceService.getBerries().then(berries => this.berries.slice(1, 5)); 
	}
	gotoDetail() { }
}