export const updateGenre = (genre) => {
  return {
      type: "UPDATE_GENRE",
      payload: genre
  }
};

export const updateYear = (year) => {
  return {
      type: "UPDATE_YEAR",
      payload: year
  }
};
