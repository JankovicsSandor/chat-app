import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserProfileStore, UserProfileState } from './user-profile.store';

@Injectable({ providedIn: 'root' })
export class UserProfileQuery extends Query<UserProfileState> {

  constructor( protected override store: UserProfileStore) {
    super(store);
  }

  getUser(){
    return this.select();
  }

}
