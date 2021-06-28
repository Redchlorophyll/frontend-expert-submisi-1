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

  a {
    text-decoration: none;
  }

  .card {
    width: 100%;
    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.25));
  }

  .card .info-container {
    width: 100%;
    background-color: #2C270F;
    color: #fff;
  }

  .card .info-container .info-wrapper {
    padding: 15px;
  }

  .card .info-container .info-wrapper h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .card .info-container .info-wrapper h4 {
    color: #C4C4C4;
    margin-bottom: 15px;
  }

  .card .info-container .info-wrapper h4 span {
    color: #36CF00;
    font-weight: 600;

  }

  .card .info-container .info-wrapper ul {
    list-style-type: none;
  }

  .card .info-container .info-wrapper ul li {
    margin-bottom: 5px;
  }


  .card .info-container .info-wrapper ul li p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 10; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .card .image-container img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  </style>

  <a>
  <article class="card">
    <div class="image-container">
      <img>
    </div>
    <div class="info-container">
      <div class="info-wrapper">
        <h3><slot name="name" /></h3>
        <h4>rating: <span><slot name="rating" /></span></h4>
        <ul>
          <li><slot name="city" /></li>
          <li><p><slot name="desc" /></p></li>
        </ul>
      </div>
    </div>
  </article>
  </a>
`;

class CardBar extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('img').src = this.getAttribute('src');
    this.shadowRoot.querySelector('a').href = this.getAttribute('href');
  }
}

customElements.define('card-bar', CardBar);
