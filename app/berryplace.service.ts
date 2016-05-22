import { Injectable } from '@angular/core';

import { BerryPlace } from './berryplace';
import { BERRIES } from './mock-berries';


@Injectable()
export class BerryPlaceService {
	getBerries() {
		return Promise.resolve(BERRIES);
	}
	// See the "Take it slow" appendix
	getHeroesSlowly() {
		return new Promise<BerryPlace[]>(resolve =>
			setTimeout(() => resolve(BERRIES), 2000) // 2 seconds
		);
	}
}