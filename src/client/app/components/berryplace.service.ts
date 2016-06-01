import { Injectable } from '@angular/core';

import { BerryPlace } from './berryplace';
import { BERRIES } from './mock-berries';


@Injectable()
export class BerryPlaceService {
	getBerries() {
		return Promise.resolve(BERRIES);
	}

	getBerry(id: number) {
		return Promise.resolve(BERRIES).then(berries => berries.filter(berry => berry.id === id)[0]);
	}

	// See the "Take it slow" appendix
	getBerriesSlowly() {
		return new Promise<BerryPlace[]>(resolve =>
			setTimeout(() => resolve(BERRIES), 2000) // 2 seconds
		);
	}
}