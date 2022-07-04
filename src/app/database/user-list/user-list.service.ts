import { Injectable } from '@angular/core';
import { UserListStore } from './user-list.store';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private userListStore:UserListStore) { }

  setUserList(userList:User[]){
    this.userListStore.set(userList);
  }

  addNewUser(user:User){
    this.userListStore.add(user);
  }

  updateUser(userId:string,newName:string){
    this.userListStore.update(userId,{userName:newName});
  }

  deleteUser(userId:string){
    this.userListStore.remove(userId);
  }
}
