import { Injectable} from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';
import {Subject} from "rxjs/Subject";

@Injectable()
export class MessageService {
  messageChanged = new Subject<Message[]>();
  // messageSelectedEvent = new EventEmitter<Message>();
  messages: Message[]= [];

  constructor() {
    this.messages = MOCKMESSAGES;
    // this.messages = this.messages.sort(this.compareNames);
    this.getMessages();
    this.getMessage(this.messages[0].msgId);
    //set current contact = getContact

  }
  getMessages(){
    return this.messages.slice();

  }
  getMessage(id: string){
    for (var i = 0; i < this.messages.length; i++){
      if (this.messages[i].msgId == id) {

        return this.messages[i];
      } else
        return null;
    }
  }

  addMessage(message: Message){
    this.messages.push(message);
    this.messageChanged.next(this.messages.slice());
  }
}

