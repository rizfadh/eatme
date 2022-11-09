const DrawerInitiator = {
  init({ button, drawer, nav }) {
    button.addEventListener('click', () => {
      this._toggleDrawer(drawer, nav);
    });
  },

  _toggleDrawer(drawer, nav) {
    const cover = this._makeCover(drawer);
    nav.appendChild(cover);
    document.body.classList.toggle('disable-scroll');
    drawer.classList.toggle('opened');
  },

  _makeCover(drawer) {
    const cover = document.createElement('button');
    cover.setAttribute('id', 'cover');
    cover.setAttribute('aria-label', 'tutup menu navigasi');
    cover.addEventListener('click', () => {
      drawer.classList.toggle('opened');
      document.body.classList.toggle('disable-scroll');
      cover.remove();
    });

    return cover;
  },
};

export default DrawerInitiator;
