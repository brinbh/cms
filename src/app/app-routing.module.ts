import { RouterModule, Routes} from "@angular/router";
import {MessagesComponent} from "./messages/messages.component";
import {DocumentsComponent} from "./documents/documents.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {NgModule} from "@angular/core";
import {ContactStartComponent} from "./contacts/contact-start/contact-start.component";
import {ContactDetailComponent} from "./contacts/contact-detail/contact-detail.component";
import {DocumentStartComponent} from "./documents/document-start/document-start.component";
import {DocumentDetailComponent} from "./documents/document-detail/document-detail.component";
import {DocumentEditComponent} from "./documents/document-edit/document-edit.component";
import {ContactEditComponent} from "./contacts/contact-edit/contact-edit.component";
import {DndModule} from 'ng2-dnd';

const appRoutes: Routes = [
  { path: "", redirectTo: "/documents", pathMatch: "full"},
  { path: "documents", component: DocumentsComponent, children:[
    {path: "", component: DocumentStartComponent},
    {path: "new", component: DocumentEditComponent},
    {path: ":id", component: DocumentDetailComponent},
    {path: ":id/edit", component: DocumentEditComponent}
  ] },
  { path: "messages", component: MessagesComponent },
  { path: "contacts", component: ContactsComponent, children: [
    {path: "", component: ContactStartComponent},
    {path: "new", component: ContactEditComponent},
    {path: ":id", component: ContactDetailComponent},
    {path: ":id/edit", component: ContactEditComponent}
  ] }

]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    DndModule.forRoot()
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
