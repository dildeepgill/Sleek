const LightModeR = (state, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return {
        LightMode: !state.LightMode,
      };
    }
    default:
      return state;
  }
};

export default LightModeR;
