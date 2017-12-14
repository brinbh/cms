import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {Document} from "../document.model";
import {DocumentService} from "../document.service";

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
  document: Document;
  originalDocument: Document;
  editMode = false;
  id: number;
  constructor(private route: ActivatedRoute,
              private documentService: DocumentService,
              private router: Router) { }

  ngOnInit() {
      this.route.params.subscribe(
        (params: Params)=>{
          this.id = +params['id'];
          if (this.id === null){
            this.editMode = false;
          }
          this.originalDocument = this.documentService.getDocumentIndex(this.id);
          if (this.originalDocument === null){
            this.editMode = false;
            return;
          }
          this.editMode = params['id'] != null;
          this.document = JSON.parse(JSON.stringify(this.originalDocument));
        }
      )
  }
  onSubmit(form: NgForm){
    const value = form.value;
    const newDocument = new Document("id", value.title, value.description, value.url, "");
    if (this.editMode === true){
      this.documentService.update(this.id, newDocument);
    }else{
      this.documentService.add(newDocument);
    }
    this.router.navigate(['/documents'], {relativeTo: this.route});

  }
  onCancel(){
    this.router.navigate(['/documents'], {relativeTo: this.route});
  }

}
