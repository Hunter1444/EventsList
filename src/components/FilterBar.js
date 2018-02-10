import React from 'react';
import { connect } from 'react-redux';
import PriceSort from './PriceSort';
import TypeFilter from './TypeFilter';
import NameFilter from './NameFilter';

export default class FilterBar extends React.Component{
  render(){
    return(
      <div>
        <div className="row mb-2">
          <NameFilter/>
        </div>
        <div className="row mb-3">
          <PriceSort/>
          <TypeFilter/>
        </div>
      </div>
    )
  }
}
//
// export default connect('',
//   dispatch => ({
//     sortByPrice: (sort) =>{
//       dispatch({ type: `SORT_PRICE_${sort.sort}`})
//     }
//   })
// )(FilterBar)
