import '../components/likeButton';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurants, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favoriteRestaurants = favoriteRestaurants;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) this._renderLiked();
    else this._renderLike();
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurants.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    const likeButton = document.createElement('like-button');
    likeButton.setAttribute('data-liked', false);
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.putRestaurant(this._restaurant);
      this._renderButton();
    });
    this._likeButtonContainer.innerHTML = '';
    this._likeButtonContainer.appendChild(likeButton);
  },

  _renderLiked() {
    const likeButton = document.createElement('like-button');
    likeButton.setAttribute('data-liked', true);
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurants.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
    this._likeButtonContainer.innerHTML = '';
    this._likeButtonContainer.appendChild(likeButton);
  },
};

export default LikeButtonPresenter;
