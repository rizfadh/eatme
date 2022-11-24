class RestaurantSkeleton extends HTMLElement {
  connectedCallback() {
    this._amount = this.dataset.amount;
    this.render();
  }

  render() {
    const makeSkeletonItem = (amount) => {
      let item = '';

      for (let i = 0; i < amount; i += 1) {
        item += `
          <div class="card">
            <div class="card-img skeleton"></div>
            <div class="card-content">
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text mt-2"></div>
            </div>
          </div>
        `;
      }

      return item;
    };

    this.innerHTML = `
      <div class="list">
        ${makeSkeletonItem(Number(this._amount))}
      </div>
    `;
  }
}

customElements.define('restaurant-skeleton', RestaurantSkeleton);
