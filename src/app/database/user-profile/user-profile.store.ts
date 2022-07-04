import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UserProfileState {
   id: string;
   userName:string;
}

export function createInitialState(): UserProfileState {
  return {
    id: '',
    userName:''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user-profile' })
export class UserProfileStore extends Store<UserProfileState> {

  constructor() {
    super(createInitialState());
  }

}
