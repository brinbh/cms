import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CmsComponent } from './cms.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { HeaderComponent } from './header/header.component';
import { ContactItemComponent } from './contacts/contact-item/contact-item.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentListComponent } from './documents/document-list/document-list.component';
import { DocumentItemComponent } from './documents/document-item/document-item.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageItemComponent } from './messages/message-item/message-item.component';
import { MessageEditComponent } from './messages/message-edit/message-edit.component';
import { DropdownDirective } from './dropdown/dropdown.directive';
import {ContactService} from "./contacts/contact.service";
import {DocumentService} from "./documents/document.service";
import {MessageService} from "./messages/message.service";
import {AppRoutingModule} from "./app-routing.module";
import { ContactStartComponent } from './contacts/contact-start/contact-start.component';
import { DocumentStartComponent } from './documents/document-start/document-start.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import {WindRefService} from "./wind-ref.service";
import {FormsModule} from "@angular/forms";
import { ContactsFilterPipe } from './contacts/contacts-filter.pipe';
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    CmsComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent,
    HeaderComponent,
    ContactItemComponent,
    DocumentsComponent,
    DocumentListComponent,
    DocumentItemComponent,
    DocumentDetailComponent,
    MessagesComponent,
    MessageListComponent,
    MessageItemComponent,
    MessageEditComponent,
    DropdownDirective,
    ContactStartComponent,
    DocumentStartComponent,
    DocumentEditComponent,
    ContactEditComponent,
    ContactsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ContactService,
    DocumentService,
    MessageService,
    WindRefService],
  bootstrap: [CmsComponent]
})
export class CmsModule { }
