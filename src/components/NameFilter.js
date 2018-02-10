import React from 'react';
import { connect } from 'react-redux';

class NameFilter extends React.Component{
  filterByName(e){
    this.props.filterByName({filter: e.target.value})
  }

  render(){
    return(
      <input value={this.props.currentFilterName} onChange={this.filterByName.bind(this)} className="form-control" placeholder="Введите название события"/>
    )
  }
}

export default connect(
  state => ({
    currentFilterName: state.currentFilter.name
  }),
  dispatch => ({
    filterByName: (filter) =>{
      dispatch({ type: 'FILTER_BY_NAME', payload: filter.filter})
    }
  })
)(NameFilter)
