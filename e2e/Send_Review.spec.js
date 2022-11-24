/* eslint-disable no-undef */

const assert = require('assert');

Feature('Send Review');

Before(({ I }) => {
  I.amOnPage('/');

  I.waitForElement('restaurant-item', 30);
  I.seeElement('restaurant-item');
  I.click(locate('restaurant-item a').first());
});

Scenario('send empty name and review', ({ I }) => {
  I.waitForElement('form', 30);
  I.fillField('name', '  ');
  I.fillField('review', '  ');
  I.click('form button');

  I.waitForElement('.swal2-error', 30);
  I.seeElement('.swal2-error');
});

Scenario('send review', async ({ I }) => {
  I.waitForElement('form', 30);
  I.fillField('name', 'Skeeter Davis');
  const review = 'Why do these eyes of mine cry?';
  I.fillField('review', review);
  I.click('form button');

  I.waitForElement('.swal2-success', 30);
  I.seeElement('.swal2-success');

  const reviewSuccess = await I.grabTextFrom(locate('#review p').last());

  assert.strictEqual(review, reviewSuccess);
});
