const petFavorite = (state = 5, action) => {
  switch (action.type) {
    case "PET_FAVORITE_INCREMENT":
      return state + action.payload;
    case "PET_FAVORITE_DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default petFavorite;
