class LikeButton extends HTMLElement {
  set liked(bool) {
    this._liked = bool;
    this.render();
  }

  render() {
    this.innerHTML = this._liked ? (
      `<button aria-label="batal favoritkan restoran" id="likeButton" class="like">
        <i class="bx bxs-heart bx-cssSize" aria-hidden="true"></i>
      </button>`
    ) : (
      `<button aria-label="favoritkan restoran" id="likeButton" class="like">
        <i class="bx bx-heart" aria-hidden="true"></i>
      </button>`
    );
  }
}

customElements.define('like-button', LikeButton);
