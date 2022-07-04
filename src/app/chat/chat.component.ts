import { Component, OnInit } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { ChatMessage } from '../database/message/chat-message.class';
import { ChatService } from '../database/message/chat.service';
import { UserProfileQuery } from '../database/user-profile/user-profile.query';
import { UserProfileState } from '../database/user-profile/user-profile.store';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages$: ReplaySubject<ChatMessage[]> =new ReplaySubject();
  user$: ReplaySubject<string>=new ReplaySubject();

  constructor(private chatService:ChatService,private userProfQuery:UserProfileQuery ) { 
    this.chatService.getAllMessages().subscribe(this.messages$);
    this.userProfQuery.getUser().pipe(map((user)=>user.id)).subscribe(this.user$);
  }

  ngOnInit(): void {
  }

}
