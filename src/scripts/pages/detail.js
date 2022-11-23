import Swal from 'sweetalert2';
import RestaurantAPI from '../data/restaurantAPI';
import UrlParser from '../routes/url-parser';
import '../components/restaurantDetail';
import LikeButtonPresenter from '../utils/like-button-presenter';

const Detail = {
  async render() {
    return `
    <article>
      <div class="container">
        <div class="detail mt-1">
          <div id="restaurants">
            <h2 class="text-center">Memuat Restoran</h2>
          </div>
        </div>
        <div id="likeButtonContainer"></div>
      </div>
    </article>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantAPI.restaurantDetail(url.id);
    if (restaurant === null) {
      Swal.fire({
        titleText: 'Error!',
        text: 'Tidak bisa mengambil data, silahkan periksa koneksi',
        icon: 'error',
        confirmButtonColor: '#222',
      });
    } else {
      const restaurantContainer = document.querySelector('#restaurants');
      const restaurantDetail = document.createElement('restaurant-detail');
      restaurantDetail.restaurant = restaurant;
      restaurantContainer.innerHTML = '';
      restaurantContainer.appendChild(restaurantDetail);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          city: restaurant.city,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
        },
      });
    }
  },
};

export default Detail;
