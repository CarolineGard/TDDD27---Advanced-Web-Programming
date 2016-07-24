import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-explore',
  templateUrl: 'explore.component.html',
  styleUrls: ['explore.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class ExploreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
