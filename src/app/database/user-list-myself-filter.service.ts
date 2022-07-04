import { Injectable } from '@angular/core';
import { combineLatest, map, ReplaySubject } from 'rxjs';
import { UserListService } from './user-list/user-list.service';
import { User } from './user-list/user.class';
import { UserProfileQuery } from './user-profile/user-profile.query';

@Injectable({
  providedIn: 'root'
})
export class UserListMyselfFilterService {

  private fullUserList:ReplaySubject<User[]>=new ReplaySubject()
  constructor(private userProfile:UserProfileQuery,private userListService:UserListService) {

    combineLatest([this.userProfile.getUser(),this.fullUserList]).pipe(map(([userProfValue,userList])=>{
      return userList.filter(e=>e.id!=userProfValue.id);
    })).subscribe((val)=>this.userListService.setUserList(val));
  }

  setFullUserList(userList:User[]){
    this.fullUserList.next(userList);
  }
}
