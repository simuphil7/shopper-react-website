const carter = (state = [[], [], 0, 0], action) => {
  switch (action.type) {
    case "addcart":
      const statecopy = [[], [], 0, 0];
      state[0].push(action.payload.id);
      statecopy[0] = state[0];
      state[1].push(action.payload);
      statecopy[1] = state[1];
      state[2] = state[2] + parseInt(action.payload.value);
      statecopy[2] = state[2];
      state[3] = state[3] + 1;
      statecopy[3] = state[3];

      return statecopy;
    case "removecart":
      const statecopy1 = [[], [], 0, 0];
      const ind = state[0].indexOf(action.payload.id);
      const ind1 = action.payload;

      state[0].splice(ind, 1);
      statecopy1[0] = state[0];
      state[1] = state[1].filter((ele) => ele != ind1);
      statecopy1[1] = state[1];
      state[2] = state[2] - parseInt(action.payload.value);
      statecopy1[2] = state[2];
      state[3] = state[3] - 1;
      statecopy1[3] = state[3];

      //state[1].delete(ind1)
      return statecopy1;
    default:
      return state;
  }
};

export default carter;
