export class App {
  configureRouter(config, router) {
    config.map([
      { route: ['', 'clare'], name: 'clare',      moduleId: 'clare',      nav: true, title: 'CLARE H' },
      { route: 'diversity', name: 'diversity',      moduleId: 'diversity',      nav: true, title: 'D&I' },
      { route: 'tech',         name: 'tech',        moduleId: 'tech',        nav: true, title: 'TECH' },
      { route: 'more',  name: 'more', moduleId: 'more', nav: true, title: 'MORE' }
    ]);

    this.router = router;
  }
}
