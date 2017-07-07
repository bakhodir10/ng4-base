import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {AboutComponent} from 'app/about/about.component';
import {UserServiceImpl} from './users/user.service.impl';
import {AppRouteModule} from './app.route.module';

@NgModule({
  declarations: [
    AppComponent, UsersComponent, AboutComponent
  ],
  imports: [
    BrowserModule, HttpModule, AppRouteModule
  ],
  providers: [
    {
      provide: 'UserService',
      useClass: UserServiceImpl
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
