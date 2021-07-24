import RestaurantSource from '../../data/restaurant-source'; // eslint-disable-line
import '../components/hero'; // eslint-disable-line
import '../components/card'; // eslint-disable-line
import API_ENDPOINT from '../../globals/api-endpoint';

const Home = {
  async render() {
    return `

    <div class="main-header">
      <h2 class="">Explore Tempat Makanan Enak</h2>
    </div>
    <div class="parent">
      <section id="card-parent" class="wrapper">
        <div class="preloader-wrapper">
          <img src="./preloader/807.gif" alt="">
        </div>
      </section>
    </div>
    `;
  },

  async afterRender() {
    try {
      const restaurants = await RestaurantSource.RestaurantList();
      const restaurantContainer = document.querySelector('#card-parent');
      let restaurantCard = '';
      const header = document.querySelector('.hero-wrapper');
      header.innerHTML = '<hero-bar></hero-bar>';

      restaurants.forEach((restaurant) => {
        restaurantCard += `
        <card-bar
              alt="tempat makan dengan nama ${restaurant.name} yang berada di ${restaurant.city}"
              src="${API_ENDPOINT.IMAGE('small', restaurant.pictureId)}"
              href="${`#/detail/${restaurant.id}`}"
              name="${restaurant.name}"
              rating="${restaurant.rating}/5"
              city="${restaurant.city}"
              desc="${restaurant.description}"
              >
          <div slot="name"></div>
          <span  / 5</span>
          <div slot="city"></div>
          <div slot="desc"></div>
        </card-bar>
        `;
      });

      restaurantContainer.innerHTML = restaurantCard;
    } catch (err) {
      const errorPopUp = confirm('failed to fetch, would you like to refresh page?'); // eslint-disable-line
      if (errorPopUp === true) {
        window.location.reload();
      }
    }
  },
};

export default Home;
