import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatRoutes } from './pages/chat/chat-routing.module';
import { HomeRoutes } from './pages/home';
  
export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/home', 
		pathMatch: 'full' 
	},

	...HomeRoutes,
	...ChatRoutes
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}