/* eslint-disable no-undef */

Feature('Unliking Restaurants');

Before(async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('restaurant-item', 30);
  I.seeElement('restaurant-item');
  I.click(locate('restaurant-item a').first());

  I.waitForElement('like-button', 30);
  I.click('like-button');

  I.amOnPage('/#/favorite');
});

Scenario('showing liked restaurants', ({ I }) => {
  I.waitForElement('restaurant-item', 30);
  I.seeElement('restaurant-item');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.waitForElement('restaurant-item', 30);
  I.click('restaurant-item a');

  I.waitForElement('like-button', 30);
  I.seeElement('[data-liked="true"]');
  I.click('like-button');

  I.amOnPage('/#/favorite');
  I.waitForElement('.no-restaurant', 30);
  I.see('Tidak ada restoran', 'h3');
});
