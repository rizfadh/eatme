import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import RestaurantFavoriteIdb from '../../src/scripts/data/restaurantFavoriteIdb';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurants: RestaurantFavoriteIdb,
    restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
