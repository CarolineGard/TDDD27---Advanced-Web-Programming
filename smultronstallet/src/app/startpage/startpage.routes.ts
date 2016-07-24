import { provideRouter, RouterConfig } from '@angular/router';
import { StartpageComponent } from './startpage.component';

export const StartpageRoutes = [
	{
		path: 'start',
		component: StartpageComponent,
		index: true
	}
];