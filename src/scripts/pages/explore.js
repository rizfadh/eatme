import Swal from 'sweetalert2';
import RestaurantAPI from '../data/restaurantAPI';
import '../components/restaurantList';

const Explore = {
  async render() {
    return `
    <div class="jumbotron" tabindex="0">
      <img src="./images/heros/hero-image_1.jpg" alt="">
      <div>
        <h2 class="logo">EatMe</h2>
        <p>Cari restoran favoritmu disini!</p>
      </div>
    </div>
    <article>
      <div class="container">
        <div class="explore mt-1">
          <h2 class="text-center fs-2" tabindex="0">Eksplor Restoran</h2>
          <div id="restaurants" class="mt-1">
            <h3 class="text-center">Memuat Restoran</h3>
          </div>
        </div>
      </div>
    </article>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantAPI.restaurantExplore();
    if (restaurants === null) {
      Swal.fire({
        titleText: 'Error!',
        text: 'Tidak bisa mengambil data, silahkan periksa koneksi',
        icon: 'error',
        confirmButtonColor: '#222',
      });
    } else {
      const restaurantContainer = document.querySelector('#restaurants');
      const restaurantList = document.createElement('restaurant-list');
      restaurantList.restaurants = restaurants;
      restaurantContainer.innerHTML = '';
      restaurantContainer.appendChild(restaurantList);
    }
  },
};

export default Explore;
