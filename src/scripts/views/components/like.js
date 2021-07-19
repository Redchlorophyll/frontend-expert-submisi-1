const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <img src="./images/svgs/Like.svg" class="icon" alt="icon like restaurant">
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <img src="./images/svgs/Like-Solid.svg" class="icon" alt="icon unlike restaurant">
  </button>
`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
