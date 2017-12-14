import { Injectable} from '@angular/core';
import { Message } from './message.model';
import {Subject} from "rxjs/Subject";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class MessageService {
  messageChangedEvent = new Subject<Message[]>();
  messageSelectedEvent = new Subject<Message>();
  messages: Message[]= [];
  maxMessageId: number;
  currentId: number;

  constructor(private http: Http) {
    // this.messages = MOCKMESSAGES;
    // // this.messages = this.messages.sort(this.compareNames);
    // this.getMessages();
    // this.getMessage(this.messages[0].id);
    //set current message = getMessage
    this.initMessages();
    console.log(this.messages);

  }
  getMessages(){
    return this.messages.slice();

  }
  getMessage(id: string){
    for (var i = 0; i < this.messages.length; i++){
      if (this.messages[i].id == id) {

        return this.messages[i];
      } else
        return null;
    }
  }

  addMessage(message: Message){
    this.messages.push(message);
    this.storeMessages(this.messages.slice());
  }


  getMaxId() {
    this.maxMessageId = 0;
    for (const message of this.messages) {
      this.currentId = parseInt(message.id, 10);
      if (this.currentId > this.maxMessageId) {
        this.maxMessageId = this.currentId;
      }
      return this.maxMessageId;
    }
  }

  initMessages(){
  this.http.get('https://cms-project-47fa8.firebaseio.com/messages.json')
    .map((response: Response) =>{
        this.messages = response.json();
        return this.messages;
      }
    ).subscribe((messages: Message[]) => {
    this.messages = messages;
    this.maxMessageId = this.getMaxId();
    this.messageChangedEvent.next(this.messages.slice());
    });
  }
/*When documents are added, updated, or deleted*/
  storeMessages(updatedMessages: Message[]){
    return this.http.put(
      'https://cms-project-47fa8.firebaseio.com/messages.json', updatedMessages)
      .subscribe((response: Response) => {
        this.messages = updatedMessages;+
        this.messageChangedEvent.next(this.messages.slice());
        this.initMessages();}
      );
  }
}

