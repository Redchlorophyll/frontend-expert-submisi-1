const template = `
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
    word-wrap: break-word;
  }

  .review .review-text {
    margin: 10px 0 0 10px;
    word-wrap: break-word;
  }
  </style>

  <div class="review">
    <div class="username">
      <span class="reviewer-name"></span>
    </div>
    <div class="review-text">
      <p class="user-review"></p>
    </div>
  </div>
`;

class ReviewBar extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;

    this.innerHTML = template;
    this.querySelector('.reviewer-name').innerText = this.getAttribute('reviewer-name');
    this.querySelector('.user-review').innerText = this.getAttribute('user-review');
  }
}

customElements.define('review-bar', ReviewBar);
