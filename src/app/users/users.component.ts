import {Component, Inject, OnInit} from '@angular/core';
import {User} from './user.model';
import {UserService} from 'app/users/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];
  ngOnInit(): void {
    this.getList();
    this.findOne(1);
  }

  constructor(@Inject('UserService') private userService: UserService) {}

  getList() {
    this.userService.read().then(res => {
      console.log(res);
      this.users = res;
    });
  }

  findOne(id: number) {
    this.userService.findOne(id).then(res => {
      console.log(res);
    })
  }
}
