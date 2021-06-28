import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import restaurants from '../DATA.json';
import ReviewBar from './views/components/review';
import DetailBar from './views/components/detail';
import NavBar from './views/components/navbar';
import App from './views/app';

// document.addEventListener('DOMContentLoaded', () => {
//   restaurantCard(restaurants.restaurants);
// });
const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
});
