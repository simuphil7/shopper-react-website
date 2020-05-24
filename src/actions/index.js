export const togg = () => {
  return {
    type: "togg",
  };
};

export const wisher = (a) => {
  return {
    type: "addwish",
    payload: a,
  };
};
export const unwisher = (a) => {
  return {
    type: "removewish",
    payload: a,
  };
};

export const addCart = (a) => {
  return {
    type: "addcart",
    payload: a,
  };
};
export const removeCart = (a) => {
  return {
    type: "removecart",
    payload: a,
  };
};
