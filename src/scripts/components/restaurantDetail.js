import Swal from 'sweetalert2';
import RestaurantAPI from '../data/restaurantAPI';
import CONFIG from '../globals/config';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card text-left shadow-none">
        <img tabindex="0" class="card-img-lg" src="${CONFIG.API_IMAGE_URL.MEDIUM}/${this._restaurant.pictureId}" alt="foto restoran ${this._restaurant.name}">
        <div class="card-content p-none">
          <p tabindex="0" class="mt-2"><i class="bx-fw bx bxs-map" aria-label="alamat"></i> ${this._restaurant.address} Kota ${this._restaurant.city}</p>
          <h2 tabindex="0" class="card-header mt-2 fs-2"><span aria-label="restoran ${this._restaurant.name}">${this._restaurant.name}</span> (<i class="bx-fw bx bxs-star bx-sm" aria-label="rating"></i>${this._restaurant.rating})</h2>
          <div tabindex="0" class="badge mt-2">
          <i class='bx bx-category bx-md' aria-label="kategori"></i>
            ${this._restaurant.categories.map((category) => `
              <div class="badge-content shadow-sm">
                <p aria-label="${category.name},">${category.name}</p>
              </div>
            `).join('')}
          </div>
          <p tabindex="0" class="mt-2 text-justify">${this._restaurant.description}</p>
          <h3 tabindex="0" class="mt-2">Menu Makanan</h3>
          <div tabindex="0" class="list mt-2">
            ${this._restaurant.menus.foods.map((menu) => `
              <div class="card dark shadow-sm">
                <div class="card-content">
                  <p aria-label="${menu.name},">${menu.name}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <h3 tabindex="0" class="mt-2">Menu Minuman</h3>
          <div tabindex="0" class="list mt-2">
            ${this._restaurant.menus.drinks.map((menu) => `
              <div class="card dark shadow-sm">
                <div class="card-content">
                  <p aria-label="${menu.name},">${menu.name}</p>
                </div>
              </div>
            `).join('')}
          </div>
          <h3 tabindex="0" class="mt-2">Review</h3>
          <div id="review">
            ${this._restaurant.customerReviews.map((review) => `
              <div tabindex="0" class="card text-left mt-2 shadow-sm">
                <div class="card-content">
                  <h4 class="card-header">${review.name}</h4>
                  <small class="mt-2">${review.date}</small>
                  <p class="mt-2">${review.review}<p>
                </div>
              </div>
            `).join('')}
          </div>
          <h3 tabindex="0" class="mt-2">Tambah Review</h3>
          <div class="review-input mt-2">
            <form id="reviewInput">
              <input type="text" class="shadow-sm" name="name" placeholder="Masukkan Nama Kamu" required>
              <textarea class="mt-3 shadow-sm" name="review" placeholder="Masukkan Review Kamu" aria-label="Masukkan Review Kamu" required></textarea>
              <button type="submit" class="btn mt-3">Kirim review</button>
            </form>
          </div>
        </div>
      </div>
    `;

    const addReview = async (review) => {
      const response = await RestaurantAPI.addReview(review);
      if (response === null) {
        Swal.fire({
          titleText: 'Error!',
          text: 'Tidak bisa mengirim data, silahkan periksa koneksi',
          icon: 'error',
          confirmButtonColor: '#222',
        });
        return;
      }

      Swal.fire('Berhasil!', 'Berhasil menambah review', 'success');
      this.querySelector('#review').innerHTML = response.map((reviewData) => `
        <div class="card text-left mt-2 shadow-sm">
          <div class="card-content">
            <h4 class="card-header">${reviewData.name}</h4>
            <small class="mt-2">${reviewData.date}</small>
            <p class="mt-2">${reviewData.review}<p>
          </div>
        </div>
      `).join('');
    };

    this.querySelector('#reviewInput').addEventListener('submit', (event) => {
      event.preventDefault();
      const value = {
        id: this._restaurant.id,
        name: event.target.name.value,
        review: event.target.review.value,
      };
      addReview(value);
      event.target.reset();
    });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
