import { provideRouter, RouterConfig } from '@angular/router';
import { AddBerryComponent } from './add-berry.component';

export const AddBerryRoutes = [
	{
		path: 'add',
		component: AddBerryComponent,
		index: true
	}
];