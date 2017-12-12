export class Document{
  docId: string;
  docName: string;
  docDescription: string;
  docUrl: string;
  docChildren: string;

  constructor(docId: string,
              docName: string,
              docDescription: string,
              docUrl: string,
              docChildren: string){
      this.docId = docId;
      this.docName = docName;
      this.docDescription = docDescription;
      this.docUrl = docUrl;
      this.docChildren = docChildren;
  }
}


