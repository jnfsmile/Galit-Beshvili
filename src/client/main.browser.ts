//# Providers provided by Angular
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app';

// Bootstrap our Angular app with a top level component `App` and inject
// our Services and Providers into Angular's dependency injection

export function main(initialHmrState?: any): Promise<any> {

const platform = platformBrowserDynamic();
return platform.bootstrapModule(AppModule)
  /*return bootstrap(App, [
    ...PROVIDERS,
    ...ENV_PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...APP_PROVIDERS,
    ...APP_ROUTER_PROVIDERS
  ])*/
  .catch(err => console.error(err));
}

//## Vendors
//
// For vendors for example jQuery, Lodash, angular2-jwt just import them anywhere in your app
// You can also import them in vendors to ensure that they are bundled in one file
// Also see custom-typings.d.ts as you also need to do `typings install x` where `x` is your module

//## Hot Module Reload
//
// experimental version

if ('development' === ENV && HMR === true) {

  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {

  // bootstrap when documetn is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
