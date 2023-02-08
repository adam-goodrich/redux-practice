export const petIncrement = (num) => {
  return {
    type: "PET_COUNTER_INCREMENT",
    payload: num,
  };
};

export const petDecrement = (num) => {
  return {
    type: "PET_COUNTER_DECREMENT",
    payload: num,
  };
};

export const petFavoriteIncrement = (num) => {
  return {
    type: "PET_FAVORITE_INCREMENT",
    payload: num,
  };
};

export const petFavoriteDecrement = (num) => {
  return {
    type: "PET_FAVORITE_DECREMENT",
    payload: num,
  };
};
