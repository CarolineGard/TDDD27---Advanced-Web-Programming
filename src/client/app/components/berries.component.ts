import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { BerryPlace } from './berryplace';
import { BerryDetailComponent } from './berry-detail.component';
import { BerryPlaceService } from './berryplace.service';

@Component({
  selector: 'my-berries',
  templateUrl: './src/client/views/berries.component.html', 
  styleUrls: ['./src/client/css/berries.component.css'],
  directives: [BerryDetailComponent]
})
export class BerriesComponent implements OnInit {
  title = 'Mina smultron'; 
  berries: BerryPlace[];
  selectedBerry: BerryPlace;

  constructor(
    private router: Router,
    private berryplaceService: BerryPlaceService) { }

  getBerries() {
    this.berryplaceService.getBerries().then(berries => this.berries = berries);
  }

  ngOnInit() {
    this.getBerries();
  }

  onSelect(berry: BerryPlace) { this.selectedBerry = berry; }

  gotoDetail() {
    this.router.navigate(['BerryPlaceDetail', { id: this.selectedBerry.id }]); 
  }
}

















