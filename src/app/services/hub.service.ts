import { Injectable } from '@angular/core';
import { HubConnectionBuilder } from '@microsoft/signalr';

@Injectable()
export class HubService {

  constructor() { 

    let connection = new HubConnectionBuilder()
    .withUrl("http://localhost:5046/hub")
    .build();

    connection.on("UserConnected", data => {
        console.log(data);
    });

    connection.on("UserConnectionAccepted", data => {
      console.log(data);
    });

    connection.on("UserList", data => {
        console.log(data);
    });

    connection.on("UserDisconnected", data => {
      console.log(data);
    });

    connection.on("UserNameChanged", data => {
      console.log(data);
    });

    connection.on("ChatMessage", data => {
      console.log(data);
    });
    

    connection.start();
        //.then(() => connection.invoke("send", "Hello"));
  }
}
