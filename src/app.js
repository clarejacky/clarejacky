export class App {
  configureRouter(config, router) {
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'D&I' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'TECH' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'MORE ABOUT ME' }
    ]);

    this.router = router;
  }
}
