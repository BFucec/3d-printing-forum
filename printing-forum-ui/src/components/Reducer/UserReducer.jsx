const initialState = {
  username: null,
  password: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };
    case "CLEAR_USER":
      return { ...state, username: null, password: null };
    default:
      return state;
  }
};

export default UserReducer;
