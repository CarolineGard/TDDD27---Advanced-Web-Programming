import { provideRouter, RouterConfig } from '@angular/router';
import { ExploreComponent } from './explore.component';

export const ExploreRoutes = [
	{
		path: 'explore',
		component: ExploreComponent,
		index: true
	}
];