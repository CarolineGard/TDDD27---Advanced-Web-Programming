import { Component } from '@angular/core';

import { BerryPlace } from './berryplace';
import { BerryDetailComponent } from './berry-detail.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Alla smultronställen:</h2>
    <ul class="berries">
      <li *ngFor="let berry of berries" [class.selected]="berry === selectedBerry" (click)="onSelect(berry)"> 
        <span class="badge">{{berry.id}}</span> {{berry.name}}
      </li>
    </ul>
    <my-berry-detail [berry]="selectedBerry"></my-berry-detail>
    `,
    styles: [`
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
    `],
    directives: [BerryDetailComponent]
})

export class AppComponent {
  title = 'Smultronstället';
  public berries = BERRIES;
  selectedBerry: BerryPlace;
  onSelect(berry: BerryPlace) { this.selectedBerry = berry; }
}

var BERRIES: BerryPlace[] = [
  { "id": 1, "name": "Nytorget", "location": "Stockholm", "category": "gata/torg", "description": "Good for sunny days" },
  { "id": 2, "name": "Hemma", "location": "Kungsholmen", "category": "private", "description": "Best place for a cup of tea" },
  { "id": 3, "name": "Cafe 60", "location": "Stockholm", "category": "Café/Restaurant", "description": "Cosy cafe located in the heart of the city with the worlds best chocolate cake!" },
  { "id": 4, "name": "Täppan", "location": "Norrköping", "category": "University", "description": "Cosy study place with cheep coffee" }
];

