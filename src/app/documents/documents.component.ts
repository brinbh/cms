import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor(
  private router: Router,
  private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onNewDocument(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
