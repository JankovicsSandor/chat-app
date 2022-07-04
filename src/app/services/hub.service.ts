import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ChatService } from '../database/message/chat.service';
import { UserListMyselfFilterService } from '../database/user-list-myself-filter.service';
import { UserListService } from '../database/user-list/user-list.service';
import { User } from '../database/user-list/user.class';
import { UserProfileService } from '../database/user-profile/user-profile.service';

@Injectable()
export class HubService {

  private connection:HubConnection;
  constructor(private userProfileService:UserProfileService,private hubService:UserListService,
    private userFilterService:UserListMyselfFilterService,private chatService:ChatService) { 

    this.connection = new HubConnectionBuilder()
    .withUrl("http://localhost:5046/hub")
    .build();

    this.connection.on("UserConnected", data => {
        console.log("User connected: ",data);
        this.hubService.addNewUser(data as User)
    });

    this.connection.on("UserConnectionAccepted", data => {
      this.userProfileService.setProfile(data)
    });

    this.connection.on("UserList", data => {
        console.log("User list: ",data);
        this.userFilterService.setFullUserList(data as User[])
    });

    this.connection.on("UserDisconnected", data => {
      this.hubService.deleteUser(data as string)
    });

    this.connection.on("UserNameChanged", data => {
     this.hubService.updateUser(data.userId,data.newUserName)
    });

    this.connection.on("ChatMessage", data => {
      this.chatService.addNewMsg(data);
      console.log("New chat: ",data);
    });
    

    this.connection.start();
        //.then(() => connection.invoke("send", "Hello"));
  }

  changeUserName(newUserName:string){
    this.connection.invoke("ChangeUserName",newUserName);
    this.userProfileService.setProfileName(newUserName);
  }

  sendTextMessage(text: string){
    this.connection.invoke("SendChatMessage",text);
  }
}
