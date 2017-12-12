import { Component, OnInit} from '@angular/core';
import { Contact } from '../contact.model';
import {ContactService} from "../contact.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact;
  id: number;
  constructor(private contactService: ContactService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.id = +params["id"];
        this.contact = this.contactService.getContactIndex(this.id);
      }
    );
    this.contactService.contactSelectedEvent.subscribe(
      (contact: Contact) => {this.contact = contact});
  }
  onEditContact(){
    this.router.navigate(['edit'], {relativeTo: this.route});

  }
  onDeleteContact(){
    this.contactService.onDeleteService(this.contact);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
