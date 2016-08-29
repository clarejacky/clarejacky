export class App {
  configureRouter(config, router) {
    config.title = 'YOU';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'YOU' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'inclusion' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'about' }
    ]);

    this.router = router;
  }
}
