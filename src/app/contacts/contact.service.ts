import { Injectable } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import {Subject} from "rxjs/Subject";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class ContactService {
  contacts: Contact[]= [];

  contactSelectedEvent = new Subject<Contact>();
  contactChangedEvent = new Subject<Contact[]>();
  maxContactId: number;
  currentId: number;

  constructor(private http: Http) {
    // this.contacts = MOCKCONTACTS;
    // this.contacts = this.contacts.sort(this.compareNames);
    // this.getContacts();
    // this.getContact(this.contacts[0].contactId);
    //set current contact = getContact
    this.initContacts();

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
      if (this.contacts[i].id == id) {

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
    this.storeContacts(this.contacts.slice());

  }
  update(index: number, newContact: Contact){
    this.contacts[index] = newContact;
    this.storeContacts(this.contacts.slice());
  }
  add(contact: Contact){
    this.contacts.push(contact);
    this.storeContacts(this.contacts.slice());
  }

  getMaxId(){
    this.maxContactId = 0;
    for (const contact of this.contacts){
      this.currentId = parseInt(contact.id, 10);
      if (this.currentId > this.maxContactId){
        this.maxContactId = this.currentId;
      }
    }
    return this.maxContactId;
  }

  initContacts(){
    this.http.get('https://cms-project-47fa8.firebaseio.com/contacts.json')
      .map((response: Response) =>{
          this.contacts = response.json();
          return this.contacts;
        }
      ).subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
      this.maxContactId = this.getMaxId();
      this.contactChangedEvent.next(this.contacts.slice());
    });
  }
  /*When documents are added, updated, or deleted*/
  storeContacts(updatedContacts: Contact[]){
    return this.http.put(
      'https://cms-project-47fa8.firebaseio.com/contacts.json', updatedContacts)
      .subscribe((response: Response) => {
        this.contacts = updatedContacts;
        this.contactChangedEvent.next(this.contacts.slice());
        this.initContacts();}
      );
  }
}
