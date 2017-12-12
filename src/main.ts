import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CmsModule } from './app/cms.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//noinspection TypeScriptUnresolvedFunction
platformBrowserDynamic().bootstrapModule(CmsModule)
  .catch(err => console.log(err));
