import { connect } from 'react-redux';
import React from 'react';
import ReactSVG from 'react-svg';

class Card extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      favorite: this.props.favorite
    }
  }

  addToFavorite(id){
    this.setState({
      favorite: true
    })
    this.props.addFavorite(id)
  }

  removeToFavorite(id){
    this.setState({
      favorite: false
    })
    this.props.removeFavorite(id)
  }

  render(){
    const ativeClass = this.state.favorite ? ' card-favorite_active' : '';
    const clickHandler = this.state.favorite ? this.removeToFavorite.bind(this, this.props.cardId)
    : this.addToFavorite.bind(this, this.props.cardId)

    return(
      <div className="card mr-2 mb-2" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <p className="card-text">Цена: {this.props.price}р.</p>
          <i onClick={clickHandler} className={"card-favorite" + ativeClass}>
            <ReactSVG path="src/images/star.svg"/>
          </i>
        </div>
      </div>
    )
  }
}

export default connect('',
  dispatch => ({
    addFavorite: (id) =>{
      dispatch({ type: 'ADD_FAVORITE', payload:id})
    },
    removeFavorite: (id) =>{
      dispatch({ type: 'REMOVE_FAVORITE', payload:id})
    },
  })
)(Card)
