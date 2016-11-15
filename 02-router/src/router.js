export default class Router {
  constructor() {
  	this.routes = new Map();
  	this.links = document.querySelectorAll('nav a');
    this.regex =  /^\/(.*)+(\/)(:?.+)$/;

    this.bindFunctions(this, ['route', 'linkClick', 'listen', 'historypop']);
    this.listen();
  }


  init() {
    console.log("------ Init Router -----")
  	this.goToRoute(window.location.pathname);
  }

  bindFunctions(context, methods) {
    methods.map((method) => {
        context[method] = context[method].bind(context);
    });
  }

  listen() {
    [...this.links].map((link, key) => {
        link.addEventListener('click', this.linkClick);
    });
    window.addEventListener('popstate', this.historypop)
  }

  linkClick(event) {
    event.preventDefault();
    const route = event.currentTarget.getAttribute('href');
    history.pushState(route, route, route); 
    this.goToRoute(route);
  }

  goToRoute(route) {
    console.log(`Going to ${route}`);
    let dynamic = this.regex.exec(route);

    // check if route exists in route array
    if (this.routes.has(route)) {
      this.routes.get(route)();
    } else if(dynamic) { // else check if route is dynamic
      const fn = this.routes.get(dynamic[1])
      fn(dynamic[3])
    } else { // else show not found
      this.routes.get('*')();
    }
  }

  historypop(event) {
    console.log(event, history)
    let state = event.state;
    this.goToRoute(state);
  }

  route(route, fn) {
    let dynamic = this.regex.exec(route);
    if(dynamic) {
      this.routes.set(dynamic[1], fn);
    }

    else if(route && fn) {
      this.routes.set(route,fn);
      return;
    }
  }
}
