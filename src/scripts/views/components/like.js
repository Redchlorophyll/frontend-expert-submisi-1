const createLikeButtonTemplate = () => ` // eslint-disable-line
  <button aria-label="like this movie" id="likeButton" class="like">
     <img src="./images/svgs/Like.svg" class="icon">
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <img src="./images/svgs/Like-Solid.svg" class="icon">
  </button>
`;

export {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
