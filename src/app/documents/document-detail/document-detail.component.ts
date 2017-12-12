import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../document.model';
import {DocumentService} from "../document.service";
import {Params, ActivatedRoute, Route, Router} from "@angular/router";
import {WindRefService} from "../../wind-ref.service";

@Component({
  selector: 'app-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {
  @Input() document: Document;
  id: number;
  nativeWindow: any;

  constructor(private documentService: DocumentService,
              private router: Router,
              private route: ActivatedRoute,
              private windowRefService: WindRefService) {
    this.nativeWindow = windowRefService.getNativeWindow();
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
        this.document = this.documentService.getDocumentIndex(this.id);
      }
    );
    this.documentService.documentSelectedEvent.subscribe(
      (document: Document) => {
        this.document = document
      });
  }

  onEditDocument() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onViewDocument() {
    if (this.document.docUrl) {
      this.nativeWindow.open(this.document.docUrl);
    }
  }
  onDeleteDocument(){
    this.documentService.onDeleteService(this.document);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
