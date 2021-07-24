const template = document.createElement('template'); // eslint-disable-line
template.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
  font-family: 'Montserrat', sans-serif !important;
}

  /*
    navbar
  */

  .header-nav {
    height: 54px;
    width: 100%;
    background-color: #E6CE4D;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  .header-nav-icon {
    width: 88px;
    position: absolute;
    padding-top: 15px;
    margin-left: 13vw;
  }

  .header-nav ul {
    display: none;
    width: 360px;
  }

  .header-nav ul a {
    color: #000;
    text-decoration: none;
    display: inline-block;
    min-width: 44px;
    min-height: 44px;
  }

  .header-nav ul a:hover {
    color: #fff;
  }

  .skip-link {
     position: absolute;
     top: -40px;
     left: 0;
     background-color: #bf1722;
     color: white;
     padding: 8px;
     z-index: 100;
  }

  .skip-link:focus {
     top: 0;
  }

  .header-nav .spin-toggle {
    margin-top: 15px;
    margin-left: 20px;
    width: 10%;
    height: 26px;

    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 2px;
  }

  span {
    border-radius: 5px;
    display: block;
    width: 33px;
    height: 4px;
    background-color: #000;
    transition: all 0.5s;

  }

  .hamburgerButton {
    background-color: #E6CE4D;
    border: none;
  }
  /* button {
    width: 44px;
    height: 44px;
    background-color: red;
    position: absolute;
    opacity: 0;
    z-index: 1;
  } */


  /*
    sudepanel
  */

  .side-panel {
    height: 100%;
    width: 0;
    opacity: 0;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    background-color: #9D8C34;
    overflow-x: hidden;
    padding-top: 100px;
    transition: 0.6s;
  }

  .side-panel .closebtn {
    position: absolute;
    top:0;
    right: 25px;
    font-size: 36px;
  }

  .side-panel-link a {
    padding: 25px 8px 25px 32px;
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    display: block;
    transition: 0.3s;
  }

  .side-panel-link a:hover {
    color: grey;
  }

  .unhide {
    width: 250px;
    opacity: 1;
  }

  .hide {
    width: 0;
    opacity: 0;
  }
  @media only screen and (min-width:728px) {
    .header-nav {
      height: 54px;
      width: 100%;
      background-color: #E6CE4D;
      display: grid;
      grid-template-columns: 0 1fr;
    }

    .spin-toggle {
      display: none !important;
    }

    .header-nav ul {
      display: block;
      margin: 0 0 0 45vw;
    }

    .header-nav ul li {
      display: inline;
      padding-left: 30px;
    }

    .header-nav ul li a {
      padding-top: 25px;
    }

  }

  @media only screen and (min-width:1024px) {
    .header-nav ul {
      margin-left: 60vw;
    }
  }

  @media only screen and (min-width:1128px) {
    .header-nav ul {
      margin-left: 70vw;
    }
  }
</style>

<nav class="header-nav">
  <button class="hamburgerButton" id="check-burger">
    <div class="spin-toggle">
        <span></span>
        <span></span>
        <span></span>
    </div>
  </button>
  <a class="a" href="#enak-logo"><img class="header-nav-icon" src="./images/svgs/ENAK_logo.svg" alt="Icon ENAK"></a>
  <ul>
    <li><a href="#/">Home</a> </li>
    <li><a href="#/favorite">Favourite</a> </li>
    <li><a href="https://github.com/Redchlorophyll">About Us</a> </li>
  </ul>
</nav>

<nav id="sidePanel" class="side-panel">
  <div class="side-panel-link">
    <a href="javascript:void(0)" id="closebtn" class="closebtn">×</a>
    <a class="nav-url" href="#/">HOME</a>
    <a class="nav-url" href="#/favorite">FAVORITE</a>
    <a class="nav-url" href="https://github.com/Redchlorophyll">ABOUT US</a>
  </div>
</nav>
`;

class NavBar extends HTMLElement {
  constructor() {
    super();
    this.showInfo = true;

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.sidePanel = this.shadowRoot.querySelector('#sidePanel');
    this.burgerCheck = this.shadowRoot.querySelector('#check-burger');
    this.closeBtn = this.shadowRoot.querySelector('#closebtn');
    this.main = document.querySelector('main');
    this.navUrl = this.shadowRoot.querySelectorAll('.nav-url');
  }

  connectedCallback() {
    this.sideBarClickEventListener(this.burgerCheck);
    this.sideBarClickEventListener(this.closeBtn);
    this.navigationEventListener();
  }

  sideBarClickEventListener(attribute) {
    attribute.addEventListener('click', (event) => {
      this.sidePanelEvent();
      event.stopPropagation();
    });
  }

  navigationEventListener() {
    this.navUrl.forEach((tag) => {
      tag.addEventListener('click', (event) => {
        this.sidePanelEvent();
        event.stopPropagation();
      });
    });
  }

  sidePanelEvent() {
    this.sidePanel.classList.remove('hide');
    this.sidePanel.classList.toggle('unhide');
  }
}

customElements.define('nav-bar', NavBar);
