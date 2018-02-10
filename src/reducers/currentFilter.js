export default function reducer(state = {name:'', type: ''}, action) {
  switch (action.type) {
    case 'FILTER_BY_TYPE':
      state.type = action.payload;
      var newState = Object.assign({}, state);
      return newState;
    case 'FILTER_BY_NAME' :
      state.name = action.payload;
      var newState = Object.assign({}, state);
      return newState;
    default:
      return state;
  }
}
