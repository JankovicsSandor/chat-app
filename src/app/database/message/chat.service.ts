import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject, withLatestFrom } from 'rxjs';
import { ChatMessage } from './chat-message.class';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private messages:BehaviorSubject<ChatMessage[]>=new BehaviorSubject(<ChatMessage[]>[]);
  private addNewMessage$:Subject<ChatMessage>=new Subject();
  constructor() {
      this.addNewMessage$.pipe(withLatestFrom(this.messages),map(([newMessage,allMessage])=>{
        return [...allMessage,newMessage];
      })).subscribe((allMessage)=>{
        this.messages.next(allMessage);
      });
   }

  addNewMsg(message:ChatMessage){
    this.addNewMessage$.next(message);
  }

  getAllMessages(){
    return this.messages.asObservable();
  }
}
