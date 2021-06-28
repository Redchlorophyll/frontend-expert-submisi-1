import CardBar from './views/components/card';

function restaurantCard(datas) {
  let card = '';
  for (const restaurant of datas) {
    card += `
    <card-bar src="${restaurant.pictureId}" href="detail.html">
    <div slot="name">${restaurant.name}</div>
    <span slot="rating">${restaurant.rating} / 5</span>
    <div slot="city">${restaurant.city}</div>
    <div slot="desc">${restaurant.description}</div>
    </card-bar>
    `;
  }

  document.getElementById('card-parent').innerHTML = card;
}

export default restaurantCard;
