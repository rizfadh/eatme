import UrlParser from './routes/url-parser';
import DrawerInitiator from './utils/drawer-initiator';
import routes from './routes/routes';

export default class App {
  constructor({ button, drawer, nav, content }) {
    this._button = button;
    this._drawer = drawer;
    this._nav = nav;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      nav: this._nav,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
