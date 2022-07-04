import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { User } from './user.class';

export interface UserListState extends EntityState<User, string> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user-list' })
export class UserListStore extends EntityStore<UserListState> {

  constructor() {
    super();
  }

}
