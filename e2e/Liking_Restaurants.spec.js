/* eslint-disable no-undef */

const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.waitForElement('.no-restaurant', 30);
  I.see('Tidak ada restoran', 'h3');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.no-restaurant', 30);
  I.see('Tidak ada restoran', 'h3');

  I.amOnPage('/');

  I.waitForElement('restaurant-item', 30);
  I.seeElement('restaurant-item');
  const restaurantTitle = await I.grabTextFrom(locate('restaurant-item a h3').first());
  I.click(locate('restaurant-item a').first());

  I.waitForElement('like-button', 30);
  I.seeElement('[data-liked="false"]');
  I.click('like-button');

  I.amOnPage('/#/favorite');
  I.waitForElement('restaurant-item', 30);
  I.seeElement('restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('restaurant-item a h3');

  assert.strictEqual(restaurantTitle, likedRestaurantTitle);
});
