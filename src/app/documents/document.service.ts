import { Injectable, OnInit } from '@angular/core';
import { Document } from './document.model';
import {Subject} from "rxjs/Subject";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class DocumentService {
  documents: Document[]= [];
  documentSelectedEvent = new Subject<Document>();
  documentListChangedEvent = new Subject<Document[]>();
  maxDocumentId: number;
  currentId: number;

  constructor(private http: Http) {
    // this.documents = MOCKDOCUMENTS;
    // this.initDocuments()
    //   .subscribe(
    //     (documents: any[]) => this.documents = documents,
    //     (error) => console.log(error)
    //   );
    // this.documents = this.documents.sort(this.compareNames);
    // this.getDocuments();
    // this.getDocument(this.documents[0].id);

    //set current document = getDocument
    this.initDocuments();
    console.log("documents: "+ this.documents);


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
      if (this.documents[i].id == id) {

        return this.documents[i];
      } else
        return null;
    }
    return this.documents.slice();
  }
  //compareNames()compares one obj to another obj
  compareNames(documentA: Document, documentB: Document){
    if(documentA.name < documentB.name)
      return -1;
    if (documentA.name > documentB.name)
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
    // this.storeDocuments();
    this.documents[index] = newDocument;
    this.documentListChangedEvent.next(this.documents.slice());
  }
  add(document: Document){
    // this.documents.push(document);
    this.documentListChangedEvent.next(this.documents.slice());
  }
  getMaxId(){
    this.maxDocumentId = 0;
    for (const document of this.documents){
      this.currentId = parseInt(document.id, 10);
      if (this.currentId > this.maxDocumentId){
        this.maxDocumentId = this.currentId;
      }
    }
    return this.maxDocumentId;
  }

  initDocuments(){
    this.http.get('https://cms-project-47fa8.firebaseio.com/documents.json')
      .map((response: Response) =>{
      this.documents = response.json();
      return this.documents;
      }
      ).subscribe((documents: Document[]) => {
        this.documents = documents;
        this.maxDocumentId = this.getMaxId();
        this.documentListChangedEvent.next(this.documents.slice())
        });
  }
  /*When documents are added, updated, or deleted*/
  storeDocuments(){
    return this.http.put(
      'https://cms-project-47fa8.firebaseio.com/documents.json',
      this.getDocuments)
      .subscribe((response: Response) => {
          console.log(response);}
          );
  }

}

// http.get('people.json').subscribe((res:Response) => this.people = res.json());
