import '../components/restaurantList';
import RestaurantFavoriteIdb from '../data/restaurantFavoriteIdb';

const Favorite = {
  async render() {
    return `
    <article>
      <div class="container">
        <div class="favorite mt-1">
          <h2 class="text-center fs-2" tabindex="0">Restoran Favoritmu</h2>
          <div id="restaurants" class="mt-1">
            <h3 class="text-center">Memuat Restoran</h3>
          </div>
        </div>
      </div>
    </article>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantFavoriteIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#restaurants');
    if (restaurants.length === 0) {
      restaurantContainer.innerHTML = `
        <div tabindex="0" class="text-center">
          <h3>Tidak ada restoran</h3>
          <p>Pastikan kamu sudah memilih</p>
        </div>
      `;
    } else {
      const restaurantList = document.createElement('restaurant-list');
      restaurantList.restaurants = restaurants;
      restaurantContainer.innerHTML = '';
      restaurantContainer.appendChild(restaurantList);
    }
  },
};

export default Favorite;
