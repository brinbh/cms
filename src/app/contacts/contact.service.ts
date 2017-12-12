import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import {Subject} from "rxjs/Subject";

@Injectable()
export class ContactService {
  contacts: Contact[]= [];

  contactSelectedEvent = new Subject<Contact>();
  contactChangedEvent = new Subject<Contact[]>();


  constructor() {
    this.contacts = MOCKCONTACTS;
    this.contacts = this.contacts.sort(this.compareNames);
    this.getContacts();
    this.getContact(this.contacts[0].contactId);
    //set current contact = getContact

  }
  ngOnInit(){
    this.contactChangedEvent.subscribe(
      (contacts: Contact[])=>{
        this.contacts = contacts;
      }
    )
  }
  getContacts(){
    return this.contacts.slice();

  }
  getContactIndex(id: number){
    return this.contacts[id];
  }
  getContact(id: string){
    //
    for (var i = 0; i < this.contacts.length; i++){
      if (this.contacts[i].contactId == id) {

        return this.contacts[i];
      }
    }
    return null;
  }
  //compareNames()compares one obj to another obj
  compareNames(contactA: Contact, contactB: Contact){
    if(contactA.name < contactB.name)
      return -1;
    if (contactA.name > contactB.name)
      return 1;
    return 0;
  }

  onDeleteService(contact: Contact){
    if (contact == null){
      return;
    }
    const pos = this.contacts.indexOf(contact);
    if (pos < 0){
      return;
    }
    this.contacts.splice(pos, 1);
    this.contactChangedEvent.next(this.contacts.slice());

  }
  update(index: number, newContact: Contact){
    this.contacts[index] = newContact;
    this.contactChangedEvent.next(this.contacts.slice());
  }
  add(contact: Contact){
    this.contacts.push(contact);
    this.contactChangedEvent.next(this.contacts.slice());
  }

}
