import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Berry } from '../models/berry';

@Injectable() 
export class BerriesService {
	private berries: Berry[] = [];
	private likedBerries: Berry[] = [];

	constructor( private http: Http ) { }

	addBerry (berry: Berry) {
		//code
		//this.berries.push(Berry);
	}

	removeBerry (berryId) {
		/*
		for (let i = 0; i < this.berries.length; i++) {
			if (this.berries[i].id == berryId) {
				this.berries.splice(i, 1);
				return true;
			}
		}
		return false;*/
	}


}
