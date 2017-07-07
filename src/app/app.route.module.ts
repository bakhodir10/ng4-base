import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {AboutComponent} from './about/about.component';
import {NgModule} from '@angular/core';

const routes : Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  AppRouteModule{}
