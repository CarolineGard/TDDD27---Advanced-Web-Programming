import { provideRouter, RouterConfig } from '@angular/router';
import { MyLikesComponent } from './my-likes.component';

export const MyLikesRoutes = [
	{
		path: 'likes',
		component: MyLikesComponent,
		index: true
	}
];