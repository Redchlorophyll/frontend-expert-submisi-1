import RestaurantSource from '../../data/restaurant-source';
import HeroBar from '../components/hero';
import CardBar from '../components/card';
import API_ENDPOINT from '../../globals/api-endpoint';

const Home = {
  async render() {
    return `
    <div class="preloader-wrapper">
      <img src="./preloader/807.gif" alt="">
    </div>
    <div class="main-header">
      <h2 class="">Explore Tempat Makanan Enak</h2>
    </div>
    <div class="parent">
      <section id="card-parent" class="wrapper">

      </section>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.RestaurantList();
    const restaurantContainer = document.querySelector('#card-parent');

    const header = document.querySelector('.hero-wrapper');
    header.innerHTML += '<hero-bar></hero-bar>';

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += `
      <card-bar src="${API_ENDPOINT.IMAGE('small', restaurant.pictureId)}" href="${`#/detail/${restaurant.id}`}">
        <div slot="name">${restaurant.name}</div>
        <span slot="rating">${restaurant.rating} / 5</span>
        <div slot="city">${restaurant.city}</div>
        <div slot="desc">${restaurant.description}</div>
      </card-bar>
      `;
    });

    const preLoader = document.querySelector('.preloader-wrapper');
    preLoader.classList.toggle('dissaprear');
  },
};

export default Home;
