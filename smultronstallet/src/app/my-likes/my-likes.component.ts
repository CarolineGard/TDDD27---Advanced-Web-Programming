import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-my-likes',
  templateUrl: 'my-likes.component.html',
  styleUrls: ['my-likes.component.css'],
  directives: [ ROUTER_DIRECTIVES ]
})
export class MyLikesComponent implements OnInit {
  title = 'Smultron jag gillar';

  constructor() { }

  ngOnInit() {
  }

}
