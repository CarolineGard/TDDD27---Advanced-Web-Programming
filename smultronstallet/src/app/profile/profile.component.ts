import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class ProfileComponent implements OnInit {
  title = 'Profil';

  constructor( private router: Router ) { }

  ngOnInit() {
  }

}
