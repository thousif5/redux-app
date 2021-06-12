export const increment = (num) => {
  return num ? { type: "INCREMENT", payload: num } : { type: "INCREMENT" };
};

export const decrement = (num) => {
  return num ? { type: "DECREMENT", payload: num } : { type: "DECREMENT" };
};

export const login = () => {
  return {
    type: "LOG_IN",
  };
};
