import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { StartpageComponent } from './startpage/startpage.component';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {
  title = 'Smultronstället';

  constructor( private router: Router ) { }
}
