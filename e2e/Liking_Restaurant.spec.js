Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.see('Oops.. Belum ada restoran favoritmu nih, yuk tambah sekarang!', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', ({ I }) => {
  I.see('Oops.. Belum ada restoran favoritmu nih, yuk tambah sekarang!', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('card-bar');
  I.click(locate('card-bar').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('card-bar');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Oops.. Belum ada restoran favoritmu nih, yuk tambah sekarang!', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('card-bar');
  I.click(locate('card-bar').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('card-bar');
  I.click(locate('card-bar').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Oops.. Belum ada restoran favoritmu nih, yuk tambah sekarang!', '.restaurant-item__not__found');
});

Scenario('make review to restaurant', async ({ I }) => {
  I.see('Oops.. Belum ada restoran favoritmu nih, yuk tambah sekarang!', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.seeElement('card-bar');
  I.click(locate('card-bar').first());

  const userName = 'codeceptjs DAHS';
  const userReview = 'codeceptjs DAHS review';

  I.seeElement('form-bar');
  I.fillField('username', userName);
  I.fillField('review', userReview);
  I.click('button');

  // const lastUserReview = await I.grabTextFrom('.user_review').last();
  locate('.reviewer-name').withText(userName);
  locate('.user-review').withText(userReview);


});
