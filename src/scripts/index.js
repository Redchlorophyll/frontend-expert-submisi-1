import 'regenerator-runtime'; /* for async await transpile */ // eslint-disable-line
import '../styles/main.scss';
import './views/components/navbar'; // eslint-disable-line
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});
