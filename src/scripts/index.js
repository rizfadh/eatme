import 'regenerator-runtime'; /* for async await transpile */
import swRegister from './utils/sw-register';
import '../styles/main.css';
import '../styles/responsive.css';
import 'boxicons/css/boxicons.min.css';
import App from './app';

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#drawer'),
  nav: document.querySelector('nav'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
