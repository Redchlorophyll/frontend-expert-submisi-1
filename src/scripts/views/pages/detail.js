import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import DetailBar from '../components/detail';
import ReviewBar from '../components/review';
import FormBar from '../components/form';

const Detail = {
  async render() {
    return `
    <div id="restaurant-parent">
    <div id="article-container">

    </div>
    <div id="form-container">
    </div>

    <div class="reviews-wrapper">
      <div id="review-container" class="container">
        <div class="review-title">
          <h2>Review</h2>
        </div>
        <div class="preloader-wrapper">
          <img src="./preloader/807.gif" alt="">
        </div>
      </div>
    </div>
    </div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantSource.RestaurantDetail(url.id);

      document.title = `${restaurant.name} | ENAK`;
      const header = document.querySelector('.hero-wrapper');
      header.innerHTML = '';

      const detailBar = new DetailBar({
        restaurant,
      });
      const formBar = new FormBar({
        id: url.id,
      });

      const restaurantContainer = document.querySelector('#article-container');
      const reviewContainer = document.querySelector('#review-container');
      const formContainer = document.querySelector('#form-container');

      restaurantContainer.appendChild(detailBar);
      formContainer.appendChild(formBar);

      restaurant.customerReviews.forEach((review) => {
        reviewContainer.innerHTML += `
        <review-bar>
          <span slot="name">${review.name}</span>
          <span slot="review">${review.review}</span>
        </review-bar>
        `;
      });

      const preLoader = document.querySelector('.preloader-wrapper');
      preLoader.classList.toggle('dissaprear');

      formBar.buttonEvent();
    } catch (err) {
      const errorPopUp = confirm('failed to fetch, would you like to refresh page?');
      if (errorPopUp === true) {
        window.location.reload();
      }
    }
  },
};

export default Detail;
