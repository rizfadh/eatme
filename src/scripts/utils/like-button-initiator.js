import RestaurantFavoriteIdb from '../data/restaurantFavoriteIdb';
import '../components/likeButton';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await RestaurantFavoriteIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    const likeButton = document.createElement('like-button');
    likeButton.liked = false;
    likeButton.addEventListener('click', async () => {
      await RestaurantFavoriteIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
    this._likeButtonContainer.innerHTML = '';
    this._likeButtonContainer.appendChild(likeButton);
  },

  _renderLiked() {
    const likeButton = document.createElement('like-button');
    likeButton.liked = true;
    likeButton.addEventListener('click', async () => {
      await RestaurantFavoriteIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
    this._likeButtonContainer.innerHTML = '';
    this._likeButtonContainer.appendChild(likeButton);
  },
};

export default LikeButtonInitiator;
