import { Component, OnInit, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';
import { Message } from '../message.model';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subjectInput') subjectInputRef: ElementRef;
  @ViewChild('messageInput') messageInputRef: ElementRef;
  @Output() messageAdded = new EventEmitter<Message>();
  currentSender: string = "7";
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  onSendMessage(){
    const ingMessage = this.messageInputRef.nativeElement.value;
    const ingSubject = this.subjectInputRef.nativeElement.value;
    const newMessage = new Message('1', ingSubject, ingMessage, this.currentSender);
    this.messageService.addMessage(newMessage);
    // this.messageAdded.emit(newMessage);
    // this.messageAdded.preventDefault();
  }
  onClear(){
    this.subjectInputRef.nativeElement.value = "";
    this.messageInputRef.nativeElement.value = "";
  }

}
