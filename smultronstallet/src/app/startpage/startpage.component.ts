import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-startpage',
  templateUrl: 'startpage.component.html',
  styleUrls: ['startpage.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class StartpageComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }

}
