import EnakRestaurantIdb from '../../data/database'; // eslint-disable-line
import CardBar from '../components/card'; // eslint-disable-line
import API_ENDPOINT from '../../globals/api-endpoint';

const Favorite = {
  async render() {
    return `
    <div class="preloader-wrapper">
      <img src="./preloader/807.gif" alt="preloader">
    </div>
    <div class="empty-container">
      <div class="img-parent">
        <img class="img-empty" src="./images/svgs/undraw_Lost.svg">
        <span>Oops.. Belum ada restoran favoritmu nih, yuk tambah sekarang!</span>
      </div>
    </div>
    <div class="favorite-parent">
      <section id="card-parent" class="wrapper">
      </section>
    </div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await EnakRestaurantIdb.getAllRestaurants();
      const restaurantContainer = document.querySelector('#card-parent');
      const emptyContainer = document.querySelector('.empty-container');
      const header = document.querySelector('.hero-wrapper');
      header.innerHTML = '';

      if (restaurants.length !== 0) {
        emptyContainer.innerHTML = '';
      }

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
    } catch (err) {
      const errorPopUp = confirm('failed to fetch, would you like to refresh page?'); // eslint-disable-line
      if (errorPopUp === true) {
        window.location.reload();
      }
    }
  },
};

export default Favorite;
