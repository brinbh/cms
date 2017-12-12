import { Component, OnInit } from '@angular/core';
import { Document } from '../document.model';
import {DocumentService} from "../document.service";
import {Subscription} from "rxjs";
import {Response} from "@angular/http";

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})

export class DocumentListComponent implements OnInit {
  // @Output() documentWasSelected = new EventEmitter<Document>();
  documents: Document[] = [];
  private subscription: Subscription;
  constructor(private documentService: DocumentService) {

  }

  ngOnInit() {
    // this.documents = this.documentService.getDocuments();
    // this.documentService.documentListChangedEvent.subscribe(
    //   (documents: Document[])=>{
    //     this.documents = documents;
    //   }
    // )
    this.documentService.initDocuments()
      .subscribe(
        (response: Response) => {
          const data = response.json();
          console.log(data);
        },
        (error) => console.log(error)
      )
  }

  // ngOnDestroy(){
  //   this.subscription.unsubscribe();
  // }
}
