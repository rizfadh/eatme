/* eslint-disable no-undef */
import RestaurantFavoriteIdb from '../src/scripts/data/restaurantFavoriteIdb';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await RestaurantFavoriteIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await RestaurantFavoriteIdb.deleteRestaurant(1);
  });

  it('should display unlike button when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[data-liked="true"]')).toBeTruthy();
  });

  it('should not display like button when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[data-liked="false"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('like-button').dispatchEvent(new Event('click'));
    expect(await RestaurantFavoriteIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await RestaurantFavoriteIdb.deleteRestaurant(1);

    document.querySelector('like-button').dispatchEvent(new Event('click'));
    expect(await RestaurantFavoriteIdb.getAllRestaurants()).toEqual([]);
  });
});
