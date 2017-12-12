import { Injectable, OnInit } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';
import {Subject} from "rxjs/Subject";
import {Http, Headers} from "@angular/http";


@Injectable()
export class DocumentService {
  documents: Document[]= [];
  documentSelectedEvent = new Subject<Document>();
  documentListChangedEvent = new Subject<Document[]>();

  constructor(private http: Http) {
    this.documents = MOCKDOCUMENTS;
    this.documents = this.documents.sort(this.compareNames);
    this.getDocuments();
    this.getDocument(this.documents[0].docId);
    //set current document = getDocument


  }
  ngOnInit(){
    this.documentListChangedEvent.subscribe(
      (documents: Document[])=>{
        this.documents = documents;
      }
    )
  }
  getDocuments(){
    return this.documents.slice();

  }
  getDocumentIndex(id: number){
    return this.documents[id];
  }
  getDocument(id: string){
    for (var i = 0; i < this.documents.length; i++){
      if (this.documents[i].docId == id) {

        return this.documents[i];
      } else
        return null;
    }
  }
  //compareNames()compares one obj to another obj
  compareNames(documentA: Document, documentB: Document){
    if(documentA.docName < documentB.docName)
      return -1;
    if (documentA.docName > documentB.docName)
      return 1;
    return 0;
  }
  onDeleteService(document: Document){
    if (document == null){
      return;
    }
    const pos = this.documents.indexOf(document);
    if (pos < 0){
      return;
    }
    this.documents.splice(pos, 1);
    this.documentListChangedEvent.next(this.documents.slice());

  }

  update(index: number, newDocument:Document){
    this.documents[index] = newDocument;
    this.documentListChangedEvent.next(this.documents.slice());
  }
  add(document: Document){
    this.documents.push(document);
    this.documentListChangedEvent.next(this.documents.slice());
  }
  initDocuments(){
    return this.http.get('https://cms-project-47fa8.firebaseio.com/documents.json');

  }
  /*When documents are added, updated, or deleted*/
  storeDocuments(){

  }

}
