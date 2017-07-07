import {Injectable} from '@angular/core';
import {User} from './user.model';
import {BaseServiceImpl} from '../base/base.service.impl';
import {Http} from '@angular/http';
import {UserService} from './user.service';

@Injectable()
export class UserServiceImpl extends BaseServiceImpl<User> implements UserService {

  constructor(http: Http) {
      super('http://192.168.1.105:8088/api/users', http);
  }

}
