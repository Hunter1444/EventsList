export default function reducer(state = '', action) {
  switch (action.type) {
  case 'SORT_PRICE_INCREASE':
    return state = 'increase'
  case 'SORT_PRICE_DECREASE':
    return state = 'decrease'
    default:
      return state;
  }
}
