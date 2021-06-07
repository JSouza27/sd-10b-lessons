const INITIAL_STATE = {
  infoUser: [],
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SEND_DATA':
      return {
        ...state,
        infoUser: [ ...state.infoUser, action.payload.info ],
      };
    default:
      return state;
  }
}

export default myReducer;
