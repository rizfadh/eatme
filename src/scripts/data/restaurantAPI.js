import API_ENDPOINT from '../globals/api-endpoint';

const RestaurantAPI = {
  async restaurantExplore() {
    let data;

    try {
      const res = await fetch(API_ENDPOINT.EXPLORE);
      const { restaurants } = await res.json();
      data = restaurants;
    } catch (err) {
      data = null;
    }

    return data;
  },

  async restaurantDetail(id) {
    let data;

    try {
      const res = await fetch(API_ENDPOINT.DETAIL(id));
      const { restaurant } = await res.json();
      data = restaurant;
    } catch (err) {
      data = null;
    }

    return data;
  },

  async addReview(review) {
    let data;

    try {
      const res = await fetch(API_ENDPOINT.ADD_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      const { customerReviews } = await res.json();
      data = customerReviews;
    } catch (err) {
      data = null;
    }

    return data;
  },
};

export default RestaurantAPI;
