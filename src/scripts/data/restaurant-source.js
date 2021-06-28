import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantSource {
  static async RestaurantList() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async RestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async AddReview(review) {
    const response = await fetch(API_ENDPOINT.ADD_NEW_REVIEW, {
      method: 'POST',
      body: JSON.stringify(review),
      header: new Headers({
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      }),
    });

    return response;
  }
}

export default RestaurantSource;
