import React from 'react';
import { connect } from 'react-redux';

class PriceSort extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dropdown: 'hide'
    }
    this._clickHandler = this._clickHandler.bind(this)
  }

  dropdown(e){
    if(this.state.dropdown !== 'hide'){
      this.setState({dropdown: 'hide'})
    } else {
      this.setState({dropdown: 'show'})
    }
  }

  dropdownHide(){
    this.setState({dropdown: 'hide'});
  }

  sortByPrice(sort, e){
    e.preventDefault();
    this.dropdownHide()
    this.props.sortByPrice({sort})
  }

  _clickHandler(e){
    if(!this.node.contains(e.target)){
      this.dropdownHide();
    }
  }

  componentDidMount() {
    window.addEventListener("click", this._clickHandler);
  }

  componentWillUnmount(){
    window.removeEventListener('click', this._clickHandler)
  }

  render(){
    return(
      <div ref={node => this.node = node} className="mr-2">
        <div className="dropdown">
          <button onClick={this.dropdown.bind(this)} className="btn btn-secondary dropdown-toggle" type="button">
            Цена
          </button>
          <div className={"dropdown-menu active " + this.state.dropdown}>
            <a onClick={this.sortByPrice.bind(this, 'DECREASE')} className="dropdown-item" href="#">По убывания</a>
            <a onClick={this.sortByPrice.bind(this, 'INCREASE')} className="dropdown-item" href="#">По возрастанию</a>
          </div>
        </div>
      </div>
    )
  }
}

export default connect('',
  dispatch => ({
    sortByPrice: (sort) =>{
      dispatch({ type: `SORT_PRICE_${sort.sort}`})
    }
  })
)(PriceSort)
