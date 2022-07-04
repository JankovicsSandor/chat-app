import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { UserListQuery } from '../database/user-list/user-list.query';
import { User } from '../database/user-list/user.class';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList$: ReplaySubject<User[]>=new ReplaySubject();

  constructor(private userListQuery:UserListQuery) { 
    this.userListQuery.selectAll().subscribe(this.userList$);
  }

  ngOnInit(): void {
  }

}
