import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-add-berry',
  templateUrl: 'add-berry.component.html',
  styleUrls: ['add-berry.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class AddBerryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
