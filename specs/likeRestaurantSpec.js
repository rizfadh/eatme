/* eslint-disable no-undef */
import RestaurantFavoriteIdb from '../src/scripts/data/restaurantFavoriteIdb';
import * as TestFactories from './helpers/testFactories';

describe('Liking a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[data-liked="false"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[data-liked="true"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('like-button').dispatchEvent(new Event('click'));
    const restaurant = await RestaurantFavoriteIdb.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });
    await RestaurantFavoriteIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await RestaurantFavoriteIdb.putRestaurant({ id: 1 });

    document.querySelector('like-button').dispatchEvent(new Event('click'));

    expect(await RestaurantFavoriteIdb.getAllRestaurants()).toEqual([{ id: 1 }]);
    RestaurantFavoriteIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('like-button').dispatchEvent(new Event('click'));
    expect(await RestaurantFavoriteIdb.getAllRestaurants()).toEqual([]);
  });
});
