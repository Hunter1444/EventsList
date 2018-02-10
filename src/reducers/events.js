import { assignWith, findKey, keyBy } from 'lodash';

export default function reducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_EVENTS':
      action.payload.forEach((item, index) => {
        assignWith((item), {id: index + 1});
        item.favorite ? '' : assignWith((item), {favorite: false})
      })
      return [ ...action.payload ]
    case 'ADD_FAVORITE':
      var index = findKey(state, {id:action.payload})
      state[index].favorite = true;
      return state;
    case 'REMOVE_FAVORITE':
      var index = findKey(state, {id:action.payload})
      state[index].favorite = false;
      var newState = state.slice(0,)
      return newState;
    default:
      return state
  }
}
