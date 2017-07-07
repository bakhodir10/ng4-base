import {Injectable} from '@angular/core';
import {User} from './user.model';
import {BaseServiceImpl} from '../base/base.service.impl';
import {Http} from '@angular/http';
import {UserService} from './user.service';
import * as  data from './../app.config';

@Injectable()
export class UserServiceImpl extends BaseServiceImpl<User> implements UserService {
  constructor(http: Http) {
      super(data.default.server + data.default.port + data.default.url + '/users', http);
  }
}
