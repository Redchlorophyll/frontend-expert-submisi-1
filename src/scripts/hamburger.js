const burgerCheck = document.querySelector('#check-burger');
const sidePanel = document.querySelector('#sidePanel');
const main = document.querySelector('main');
const closeBtn = document.querySelector('#closebtn');
const navUrl = document.querySelectorAll('.nav-url');

burgerCheck.addEventListener('click', () => {
  sidePanel.classList.remove('hide');
  sidePanel.classList.toggle('unhide');
});

closeBtn.addEventListener('click', () => {
  sidePanel.classList.toggle('hide');
  sidePanel.classList.remove('unhide');
});

main.addEventListener('click', () => {
  sidePanel.classList.toggle('hide');
  sidePanel.classList.remove('unhide');

  if (burgerCheck.checked) {
    burgerCheck.checked = false;
  }
});

navUrl.forEach((tag) => {
  tag.addEventListener('click', () => {
    sidePanel.classList.toggle('hide');
    sidePanel.classList.remove('unhide');
  });
});
