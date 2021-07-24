import RestaurantSource from '../../data/restaurant-source'; // eslint-disable-line
import App from '../app'; // eslint-disable-line

const template = `
<style>
.form-wrapper {
  margin: 60px 0 20px 0;
}

.review-wrapper-form textarea {
  height: 100px;
}

.form-wrapper .form-title {
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1.3em;
  }

  .username-wrapper-form, .review-wrapper-form, .submit-form {
    display: flex;
    flex-direction: column;
    margin: 20px 10px 10px;
  }

  .username-wrapper-form input {
    height: 44px;
  }

  .submit-form button {
    height: 44px;
    background-color: #e6cf4d;
    cursor: pointer;
    text-decoration: none;
    color: white;
  }

  label {
    margin-bottom: 10px;
  }

  @media only screen and (min-width: 574px) {
    .form-wrapper {
      display: flex;
      justify-content: center;
    }

    .container {
      width: 500px;

    }
  }

  @media only screen and (min-width: 898px) {
    .form-wrapper {
      display: flex;
      justify-content: center;
    }

    .container {
      width: 700px;

    }
  }
</style>

<div class="form-wrapper">
  <div class="container">
    <div class="form-title">
      <h2>Tulis Review Kamu Disini!</h2>
    </div>
    <div class="username-wrapper-form">
      <label for="username">username</label>
      <input id="username" type="text" name="username" class="input" value="">
    </div>
    <div class="review-wrapper-form">
      <label for="review">review</label>
      <textarea id="review" name="review" rows="8" class="textarea" cols="80"></textarea>
    </div>
    <div class="submit-form">
      <button id="addReviewButton" type="button" name="button">Simpan</button>
    </div>
  </div>
</div>
`;

class FormBar extends HTMLElement {
  constructor({ id }) {
    super();
    this.showInfo = true;
    this.innerHTML = template;
    this.id = id;
  }

  buttonEvent() {
    const addReviewButton = this.querySelector('#addReviewButton');
    addReviewButton.addEventListener('click', () => {
      this.addReview();
    });
  }

  async addReview() {
    const app = new App({
      content: document.querySelector('#mainContent'),
    });
    const userName = this.querySelector('#username').value;
    const review = this.querySelector('#review').value;
    const reviewData = {
      id: this.id,
      name: userName,
      review,
    };

    if (userName !== '' && review !== '') {
      await RestaurantSource.AddReview(reviewData);
      app.renderPage();
    } else {
      alert('user dan review tidak boleh kosong'); // eslint-disable-line
    }
  }
}

customElements.define('form-bar', FormBar);

export default FormBar;
