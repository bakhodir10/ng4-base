import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UsersComponent} from './users/users.component';
import {AboutComponent} from 'app/about/about.component';
import {HttpModule} from '@angular/http';
import {UserServiceImpl} from './users/user.service.impl';

@NgModule({
  declarations: [
    AppComponent, UsersComponent, AboutComponent
  ],
  imports: [
    BrowserModule, HttpModule
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
