import { bootstrapApplication, platformBrowser } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//bootstrapApplication(AppComponent).catch((err) => console.error(err)); // Used to start apps with standalone components 

platformBrowserDynamic().bootstrapModule(AppModule);   //Used to start apps with modules
