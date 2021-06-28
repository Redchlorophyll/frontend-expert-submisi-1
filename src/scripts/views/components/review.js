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

  .review {
    margin: 15px 0 15px 0;
    background-color: white;
    border-left: solid 4px #E6CE4D;
    padding: 10px;
  }

  .review .username {
    font-weight: bold;
  }

  .review .review-text {
    margin: 10px 0 0 10px;
  }
  </style>

  <div class="review">
    <div class="username">
      <span><slot name="name" /></span>
    </div>
    <div class="review-text">
      <p><slot name="review" /></p>
    </div>
  </div>
`;

class ReviewBar extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('review-bar', ReviewBar);
export default ReviewBar;
