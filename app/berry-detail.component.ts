import { Component, Input } from '@angular/core';

import { BerryPlace } from './berryplace';

@Component({
	selector: 'my-berry-detail',
	template: `
	<div *ngIf="berry">
	 <div>
	       <label>name: </label>
	       <input [(ngModel)]="berry.name" placeholder="name"><br><br>
	       <label>Where is it located? </label>
	       <input [(ngModel)]="berry.location" placeholder="name"><br><br>
	       <label>Category: </label>
	       <input [(ngModel)]="berry.category" placeholder="name"><br><br>
	       <label>Description: </label>
	       <input [(ngModel)]="berry.description" placeholder="name">
       </div>
	</div>
	`
})
export class BerryDetailComponent {
	@Input()
	berry: BerryPlace;
}
