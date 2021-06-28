import API_ENDPOINT from '../../globals/api-endpoint';

const template = document.createElement('template');
template.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
  font-family: 'Montserrat', sans-serif !important;
}

* {
  margin: 0;
  padding: 0;
}
.article-wrapper {
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  min-height: 500px;
}

.article-wrapper .article-detail {
  background-color: white;
  width: 95%;
}

.article-content {
  margin: 10px 10px 150px 10px;
}

.tag-wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px 0 30px 0;
}

.food-menus, .beverage-menus .list {
  color: grey;
}

.content-wrapper .desc, .food-menus, .beverage-menus {
  margin: 30px 0 30px 0;
}

.article-header img {
  width: 100%;
}

.tag {
  background-color: #9C6343;
  min-width: 60px;
  border-radius: 10px;
  padding: 5px 5px 5px 10px;
  margin: 5px;
}

.tag span {
  font-weight: 400;
  color: white;
}

.article-info {
  width: 100%;
  max-width: 300px;
  height: 60px;
}

.wrapper {
  margin: 10px;
  display: grid;
  grid-template-columns: 1fr 5fr;
}

.article-wrapper .article-detail .article-header .article-info .rectangle {
  height: 60px;
  background-color: #E6CE4D;
}

.article-title {
  margin: 5px 0 0 5px;
}

h1 {
  font-size: 1.3em;
  font-weight: bold;
  margin-bottom: 5px;
}

h2 {
  font-size: 80%;
  font-weight: normal;
}

@media only screen and (min-width: 574px) {
  .article-detail {
    width: 500px !important;
  }
}

@media only screen and (min-width: 898px) {
  .article-detail {
    width: 700px !important;
  }
}
</style>

<div class="article-wrapper">
  <article class="article-detail">
    <div class="article-header" id="article-header">

    </div>

    <div class="article-content">
      <div class="tag-wrapper">

      </div>
      <div class="content-wrapper">
        <div class="desc">
          <p id="desc">quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
        </div>
        <div class="food-menus">
          <p>Makanan:</p>
          <p class="list" id="foods">Daging Sapi , Bebek crepes , Toastie salmon , Kari terong , Paket rosemary , Salad lengkeng</p>
        </div>
        <div class="beverage-menus">
          <p>minuman:</p>
          <p class="list" id="beverages">Sirup , Jus mangga , Es teh , Jus jeruk , Teh manis , Kopi espresso , Es kopi , Minuman soda , Jus alpukat , Jus tomat , Es krim , Coklat panas</p>
        </div>
      </div>
    </div>
  </article>
</div>
`;

class DetailBar extends HTMLElement {
  constructor({ restaurant }) {
    super();
    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.restaurant = restaurant;
  }

  connectedCallback() {
    this.setArticleHeader();
    this.setCategory();
  }

  setArticleHeader() {
    const {
      name, city, address, rating, pictureId,
    } = this.restaurant;
    const articleHeader = this.shadowRoot.querySelector('#article-header');

    const headerContent = `
    <img src="${API_ENDPOINT.IMAGE('medium', pictureId)}" alt="restoran ${name} yang berlokasi di ${address}. ${city}">

    <div class="article-info">
      <div class="wrapper">
        <div class="rectangle"></div>
        <div class="article-title">
          <h1 id="title">${name}</h1>
          <h2 id="city-and-rate">${address}, ${city} | rate: ${rating}/5</h2>
        </div>
      </div>
    </div>
    `;

    articleHeader.innerHTML = headerContent;
  }

  setCategory() {
    const { categories } = this.restaurant;
    const tagWrapper = this.shadowRoot.querySelector('.tag-wrapper');

    categories.forEach((category) => {
      tagWrapper.innerHTML += `
      <div class="tag">
        <span>${category.name}</span>
      </div>
      `;
    });
  }
}

customElements.define('detail-bar', DetailBar);
export default DetailBar;
