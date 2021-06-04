import restaurants from '../DATA.json';

export function restourantcard(datas) {
  let card = ``;
  for (let restaurant of datas) {
    console.log(restaurant.city);

    card += `
    <a href="#">
    <article class="card">
      <div class="image-container">
        <img src="${restaurant.pictureId}" alt="restaurant ${restaurant.name} yang terletak di ${restaurant.city}">
      </div>
      <div class="info-container">
        <div class="info-wrapper">
          <h3>${restaurant.name}</h3>
          <h4>rating: <span>${restaurant.rating}/5</span></h4>
          <ul>
            <li>Lokasi: ${restaurant.city}</li>
            <li><p>${restaurant.description}</p></li>
          </ul>
        </div>
      </div>
    </article>
    </a>
    `;
  }

  console.log(card);
  document.getElementById("card-parent").innerHTML = card;
}
