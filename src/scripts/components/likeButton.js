class LikeButton extends HTMLElement {
  connectedCallback() {
    this._liked = this.dataset.liked;
    this.render();
  }

  render() {
    this.innerHTML = this._liked === 'true' ? (
      `<button aria-label="batal favoritkan restoran" class="like">
        <i class="bx bxs-heart bx-cssSize" aria-hidden="true"></i>
      </button>`
    ) : (
      `<button aria-label="favoritkan restoran" class="like">
        <i class="bx bx-heart" aria-hidden="true"></i>
      </button>`
    );
  }
}

customElements.define('like-button', LikeButton);
