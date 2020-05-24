const Wish = (state = [[], [], 0], action) => {
  switch (action.type) {
    case "addwish":
      const statecopy = [[], [], 0];
      state[0].push(action.payload.id);
      state[1].push(action.payload);
      statecopy[0] = state[0];
      statecopy[1] = state[1];
      state[2] = state[2] + 1;
      statecopy[2] = state[2];
      return statecopy;
    case "removewish":
      const statecopy1 = [[], [], 0];
      const ind = state[0].indexOf(action.payload.id);
      const ind1 = action.payload;
      state[0].splice(ind, 1);
      state[1] = state[1].filter((ele) => ele != ind1);
      statecopy1[0] = state[0];
      statecopy1[1] = state[1];
      state[2] = state[2] - 1;
      statecopy1[2] = state[2];
      //state[1].delete(ind1)
      return statecopy1;
    default:
      return state;
  }
};

export default Wish;
