import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChatComponent } from './chat/chat.component';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { HubService } from './services/hub.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [HubService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor( service: HubService) {
    
  }
}
