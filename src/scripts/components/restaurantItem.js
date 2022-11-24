import CONFIG from '../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="/#/detail/${this._restaurant.id}" class="text-decoration-none text-primary" title="Restoran ${this._restaurant.name}">
        <div class="card">
          <img class="lazyload card-img skeleton" data-src="${CONFIG.API_IMAGE_URL.SMALL}/${this._restaurant.pictureId}" alt="foto restoran ${this._restaurant.name}">
          <p class="card-badge"><i class="bx-fw bx bxs-star bx-sm" aria-label="Rating"></i> ${this._restaurant.rating}</p>
          <div class="card-content">
            <p class="card-rating fw-bold"><i class="bx-fw bx bxs-map" aria-label="kota"></i> ${this._restaurant.city}</p>
            <h3 class="card-header mt-2" aria-label="restoran ${this._restaurant.name}">${this._restaurant.name}</h3>
          </div>
        </div>
      </a>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
