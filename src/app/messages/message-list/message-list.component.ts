import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Message } from '../message.model';
import {MessageService} from "../message.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message[] = [];
  private subscription: Subscription;
  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.messages = this.messageService.getMessages();
    this.subscription = this.messageService.messageChanged.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      });

  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }

}
