import { Component, OnInit } from '@angular/core';

import { BerryPlace } from './berryplace';
import { BerryDetailComponent } from './berry-detail.component';
import { BerryPlaceService } from './berryplace.service';

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
    directives: [BerryDetailComponent],
    providers: [BerryPlaceService]
})
export class AppComponent implements OnInit {
  title = 'Smultronstället';
  berries: BerryPlace[];
  selectedBerry: BerryPlace;

  constructor(private berryplaceService: BerryPlaceService) { }

  getBerries() {
    this.berryplaceService.getBerries().then(berries => this.berries = berries);
  }

  ngOnInit() {
    this.getBerries();
  }

  onSelect(berry: BerryPlace) { this.selectedBerry = berry; }
}

















