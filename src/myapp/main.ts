import {platformBrowser} from '@angular/platform-browser';
import {MyAppModuleNgFactory} from './myappmodule/myapp.module.ngfactory';

platformBrowser().bootstrapModuleFactory(MyAppModuleNgFactory);
