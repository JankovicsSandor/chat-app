import { HubService } from './services/hub.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfileQuery } from './database/user-profile/user-profile.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nameForm:FormGroup;
  messageForm:FormGroup;

  constructor(private fb:FormBuilder,private connectionService:HubService,public userProfQuery:UserProfileQuery){
    this.nameForm=this.fb.group({
      name:["",[Validators.required,Validators.minLength(3)]]
    })

    this.messageForm=this.fb.group({
      message:["",Validators.required]
    })
  }

  changeName(){
    let newUserName = this.nameForm.value.name;
    this.connectionService.changeUserName(newUserName)
  }

  sendMessage(){
    let message = this.messageForm.value.message;
    this.connectionService.sendTextMessage(message);
  }
}
