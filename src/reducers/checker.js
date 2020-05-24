const toggleCheck = (state = false, action) => {
  switch (action.type) {
    case "togg":
      return !state;
    default:
      return state;
  }
};

export default toggleCheck;
