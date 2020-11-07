
const Types = {
    LOGADO: "1",
  };
  
  const initialState = {
    user: null,
  };
  
  export default function userLogin(state = initialState, action) {
    switch (action.type) {
      case Types.LOGADO:
        return {...state, user: action.payload.user};
      default:
        return state;
    }
  }
  
  export const Creators = {
    selectUser: (user) => ({
      type: Types.LOGADO,
      payload: {
        user,
      },
    }),
  };