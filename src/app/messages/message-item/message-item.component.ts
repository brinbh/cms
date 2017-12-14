import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Message } from '../message.model';
import {ContactService} from "../../contacts/contact.service";
import {Contact} from "../../contacts/contact.model";
import {MessageService} from "../message.service";


@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {
  @Input() message: Message;
  messageSender: string = "";

  constructor(private contactService: ContactService) { }

  ngOnInit() {

    let contact: Contact = this.contactService.getContact(this.message.sender);
      this.messageSender = contact.name;
      console.log("MessageSender: " + this.messageSender);

  }

}
