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

export const changeDashboard = (showDetailPage) => {
  return {
      type: "CHANGE_DASHBOARD",
      payload: showDetailPage
  }
};

export const setDescriptionOfMovie = (description) => {
  return {
      type: "SET_DESCRIPTION",
      payload: description
  }
};
