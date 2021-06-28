import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import DetailBar from '../components/detail';
import ReviewBar from '../components/review';

const Detail = {
  async render() {
    return `
    <div id="restaurant-parent">

    </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.RestaurantDetail(url.id);
    const header = document.querySelector('.hero-wrapper');
    header.innerHTML = '';
    const detailBar = new DetailBar({
      restaurant,
    });
    const restaurantContainer = document.querySelector('#restaurant-parent');
    restaurantContainer.appendChild(detailBar);
  },
};

export default Detail;
