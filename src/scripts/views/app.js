import UrlParser from '../routes/url-parser'; // eslint-disable-line
import routes from '../routes/routes'; // eslint-disable-line

class App {
  constructor({ content }) {
    this._content = content; // eslint-disable-line
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render(); // eslint-disable-line
    await page.afterRender();
  }
}

export default App;
