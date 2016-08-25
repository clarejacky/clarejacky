export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'YRR' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'inclusion & you' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'about' }
    ]);

    this.router = router;
  }
}
