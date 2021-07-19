import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';
import EnakRestaurantIdb from '../../src/scripts/data/database';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: EnakRestaurantIdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
