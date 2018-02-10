import React from 'react';
import { connect } from 'react-redux';

class TypeFilter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dropdown: 'hide'
    }
    this._clickHandler = this._clickHandler.bind(this);
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

  filterByType(filter, e){
    e.preventDefault();
    this.dropdownHide()
    this.props.filterByType({filter})
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
      <div ref={node => this.node = node}>
        <div className="dropdown">
          <button onClick={this.dropdown.bind(this)} className="btn btn-secondary dropdown-toggle" type="button">
            Тип
          </button>
          <div className={"dropdown-menu active " + this.state.dropdown}>
            <a onClick={this.filterByType.bind(this, '')} className="dropdown-item" href="#">Все</a>
            <a onClick={this.filterByType.bind(this, 'concert')} className="dropdown-item" href="#">Концерт</a>
            <a onClick={this.filterByType.bind(this, 'exhibition')} className="dropdown-item" href="#">Выставка</a>
          </div>
        </div>
      </div>
    )
  }
}

export default connect('',
  dispatch => ({
    filterByType: (filter) =>{
      dispatch({ type: 'FILTER_BY_TYPE', payload: filter.filter})
    }
  })
)(TypeFilter)
