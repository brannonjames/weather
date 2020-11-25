const initialState = {
  showSplash: true,
  metric: false
};

const settingsReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default settingsReducer;