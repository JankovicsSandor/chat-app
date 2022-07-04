import { Injectable } from '@angular/core';
import { UserProfileState, UserProfileStore } from './user-profile.store';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private userProfStore:UserProfileStore) { }

  setProfile(profile:UserProfileState){
    this.userProfStore.update({id:profile.id,userName:profile.userName})
  }

  setProfileName(newName:string){
    this.userProfStore.update({userName:newName});
  }
}
