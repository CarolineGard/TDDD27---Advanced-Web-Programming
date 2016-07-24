import { provideRouter, RouterConfig } from '@angular/router';
import { StartpageRoutes } from './startpage/startpage.routes';
import { StartpageComponent } from './startpage/startpage.component';
import { ProfileRoutes } from './profile/profile.routes';
import { ProfileComponent } from './profile/profile.component';
import { MyLikesRoutes } from './my-likes/my-likes.routes';
import { MyLikesComponent } from './my-likes/my-likes.component';
import { AddBerryRoutes } from './add-berry/add-berry.routes';
import { AddBerryComponent } from './add-berry/add-berry.component';
import { ExploreRoutes } from './explore/explore.routes';
import { ExploreComponent } from './explore/explore.component';

const routes: RouterConfig = [
	{ path: '', component: StartpageComponent },
	...StartpageRoutes,
	...ProfileRoutes,
	...MyLikesRoutes,
	...AddBerryRoutes,
	...ExploreRoutes
];

export const appRouterProviders = [
  provideRouter(routes)
];