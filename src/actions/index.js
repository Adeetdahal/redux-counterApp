export const incNumber = (up) => {
  return {
    type: 'INCREMENT',
    payload: up,
  };
};

export const decNumber = (down) => {
  return {
    type: 'DECREMENT',
    payload: down,
  };
};

export const reset = (down) => {
  return {
    type: 'RESET',
  };
};

export const loggedin = () => {
  return {
    type: 'SIGN_IN',
  };
};

export const loggedout = () => {
  return {
    type: 'SIGN_OUT',
  };
};
