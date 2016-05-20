import { Component } from '@angular/core';

export class BerryPlace {
	id: number;
	name: string;
	location: string;
	category: string;
	description: string;
}

@Component({
  selector: 'my-app',
  template:`
  	<h1>{{title}}</h1>
  	<h2>Alla smultronställen:</h2>
  	<ul class="berries">
  		<li *ngFor="let berry of berries" [class.selected]="berry === selectedBerry" (click)="onSelect(berry)"> 
  			<span class="badge">{{berry.id}}</span> {{berry.name}}
  		</li>
  	</ul>
  	<div *ngIf="selectedBerry">
  		<div>
		 	<label>name: </label>
		 	<input [(ngModel)]="selectedBerry.name" placeholder="name"><br><br>
		 	<label>Where is it located? </label>
		 	<input [(ngModel)]="selectedBerry.location" placeholder="name"><br><br>
		 	<label>Category: </label>
		 	<input [(ngModel)]="selectedBerry.category" placeholder="name"><br><br>
		 	<label>Description: </label>
		 	<input [(ngModel)]="selectedBerry.description" placeholder="name">
		 	</div>
		</div>
  	`,
  	styles:[`
  		.selected {
  			background-color: #cfd8ca !important;
  			color: white;
  		}
  		.berries li {
  			cursor: pointer;
  			position: relative;
  			left: 0;
  		}
  		.berries li.selected:hover {
  			background-color: #607D8B;
  		}
  		.berries li:hover {
  			background-color: #607DaB;
  		}
  	`]
})

export class AppComponent { 
	title = 'Smultronstället';
	public berries = BERRIES;
	selectedBerry: BerryPlace;
	onSelect( berry: BerryPlace) {this.selectedBerry = berry; }
}

var BERRIES: BerryPlace[] = [
	{"id": 1, "name": "Nytorget", "location": "Stockholm", "category": "gata/torg", "description": "Good for sunny days"},
	{"id": 2, "name": "Hemma", "location": "Kungsholmen", "category": "private", "description": "Best place for a cup of tea"},
	{"id": 3, "name": "Cafe 60", "location": "Stockholm", "category": "Café/Restaurant", "description": "Cosy cafe located in the heart of the city with the worlds best chocolate cake!"},
	{"id": 4, "name": "Täppan", "location": "Norrköping", "category": "University", "description": "Cosy study place with cheep coffee"}
];


