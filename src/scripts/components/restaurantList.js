import './restaurantItem';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this.classList.add('list');
    this._restaurants.forEach((restaurant) => {
      const item = document.createElement('restaurant-item');
      item.restaurant = restaurant;
      this.appendChild(item);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
