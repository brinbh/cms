import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Contact} from "../contact.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ContactService} from "../contact.service";

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact: Contact;
  originalContact: Contact;
  editMode = false;
  id: number;
  invalidGroupContact: boolean = false;
  groupContacts: Contact[];
  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    const value = form.value;
    const newContact = new Contact("id", value.name, value.email, value.phone, value.url, null);
    if (this.editMode === true){
      this.contactService.update(this.id, newContact);
    }else{
      this.contactService.add(newContact);
    }
    this.router.navigate(['/contacts'], {relativeTo: this.route});

  }
  onCancel(){
    this.router.navigate(['/contacts'], {relativeTo: this.route});
  }
  isInvalidContact(newContact: Contact){
    if(!newContact){
      return true;
    }
    if (newContact.contactId === this.contact.contactId){
      return true;
    }
    for (let i = 0; i < this.groupContacts.length; i++){
      if (newContact.contactId === this.groupContacts[i].contactId){
        return true;
      }
    }
    return false;
  }
  addToGroup($event: any){
    let selectedContact: Contact = $event.dragData;
    this.invalidGroupContact = this.isInvalidContact(selectedContact);
    if(this.invalidGroupContact){
      return;
    }
    this.groupContacts.push(selectedContact);
    this.invalidGroupContact = false;
  }
  onRemoveItem(idx: number){
    if (idx < 0 || idx >= this.groupContacts.length)
      return;
    this.groupContacts.splice(idx, 1);
    this.invalidGroupContact = false;
  }
}
