import Router from './router'
import homeTpl from './templates/home.hbs'
import contactTpl from './templates/contact.hbs'
import playerTpl from './templates/player.hbs'
import notFoundTpl from './templates/not-found.hbs'

const $app = document.querySelector('#app');
const router = new Router();

function index() {
  $app.innerHTML = homeTpl()
}

function contact() {
  $app.innerHTML = contactTpl()
}

function players(route) {
  const name = route.substr(0, 1).toUpperCase() + route.substr(1)
  $app.innerHTML = playerTpl({name: name});
}

function notFound() {
  $app.innerHTML = notFoundTpl()
}

router.route('/', index)
router.route('/contact', contact)
router.route('/players/:player', players) 
router.route('*', notFound)
router.init();