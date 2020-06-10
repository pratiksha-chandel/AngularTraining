import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/*  set up for translation to french */
/* 
import { TRANSLATIONS, TRANSLATIONS_FORMAT} from '@angular/core'
declare const require;
const translations = require('raw-loader!./locale/messages.fr.xlf')

platformBrowserDynamic().bootstrapModule(AppModule,{
  provider: [
    {provider: TRANSLATIONS, useValue:translations},
    {provider: TRANSLATIONS_FORMAT, useValue: "xlf"}
  ]
})
.catch(err=> cosole.log(err));


*/