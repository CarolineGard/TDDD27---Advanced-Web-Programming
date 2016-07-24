import { provideRouter, RouterConfig } from '@angular/router';
import { ProfileComponent } from './profile.component';

export const ProfileRoutes = [
	{
		path: '/profile',
		component: ProfileComponent,
		index: true
	}
];