import { Component, OnInit} from '@angular/core';
import { Message } from './message.model';
import {MessageService} from "./message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  selectedMessage: Message;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    //   this.messageService.messageSelectedEvent.subscribe(
    //     (message: Message) => {this.selectedMessage = message});
  }
}
