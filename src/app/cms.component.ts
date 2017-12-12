import { Component } from '@angular/core';

@Component({
  selector: 'cms-root',
  templateUrl: 'cms.component.html',
  styleUrls: ['cms.component.css']
})
export class CmsComponent {
  title = 'cms';
  loadedFeature = 'contact';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
