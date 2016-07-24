import { provideRouter, RouterConfig } from '@angular/router';
import { StartpageRoutes } from './startpage/startpage.routes';
import { StartpageComponent } from './startpage/startpage.component';
import { ProfileRoutes } from './profile/profile.routes';
import { ProfileComponent } from './profile/profile.component';

const routes: RouterConfig = [
	{ path: '', component: StartpageComponent },
	{ path: 'profile', component: ProfileComponent }
	//...StartpageRoutes,
	//...ProfileRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];