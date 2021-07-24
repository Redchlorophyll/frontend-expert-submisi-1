const template = document.createElement('template'); // eslint-disable-line
template.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
  font-family: 'Montserrat', sans-serif !important;
}

.header-heros .heros {
  width: 100%;
  height: 240px;
}

.header-heros .heros .overlay {
  width: 100%;
  height: 240px;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.54) 0%, rgba(230, 206, 77, 0.54) 100%);
  position: absolute;
}

.header-heros .heros img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

/*
  paper
*/

.paper-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  transform: translateY(-30%);
}

.paper-wrapper .paper {
  width: 262px;
  background-color: #E7CE4D;
  min-height: 371px;
}

.paper-wrapper .paper-content {
  padding: 15px;
}

.paper-wrapper .paper-content h1 {
  font-size: 40px;
  margin-top: 5px;
  font-weight: bolder;
  line-height: 1.3;
}

.paper-wrapper .paper-content img {
  width: 135px;
  margin-top: 10px;
  margin-bottom: 15px;
  display: block;
}

@media only screen and (min-width:582px) {
  .header-heros .heros img {
    width: 100%;
    height: 512px;
    object-fit: cover;
  }

  .header-heros .heros .overlay {
    height: 512px;
  }

  .paper-wrapper {
    transform: translateY(-40%);
  }

  .paper-wrapper .paper {
    margin-left: 40%;
  }
}

@media only screen and (min-width:1172px) {
  .paper-wrapper .paper {
    margin-left: 50%;
  }
}

</style>

<div class="header-heros">
  <div class="heros">
    <div class="overlay">

    </div>
    <picture>
      <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg" type="image/jpeg">
      <source media="(max-width: 900px)" srcset="./images/heros/hero-image_2-large.jpg" type="image/jpeg">
      <img src="./images/heros/hero-image_2.jpg" alt="Heros - gambar header"
    </picture>
  </div>
</div>
<div class="paper-wrapper">
  <div class="paper">
    <div class="paper-content">
      <h1>KALO <br>LAPER <br>MAKAN <br>AJA DI</h1>
      <img src="./images/svgs/ENAK_logo.svg" alt="Icon ENAK">
      <span>makanan enak dan ga berat di kantong.</span>
    </div>
  </div>
</div>
`;

class HeroBar extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('hero-bar', HeroBar);
