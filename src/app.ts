import { Router, RouterConfiguration } from 'aurelia-router';
import { routes } from './app-routes';

import 'bootstrap';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Contoso University';
    config.options.pushState = true;
    config.options.root = '/';
    config.map(routes);
    
    this.router = router;
  }
}
