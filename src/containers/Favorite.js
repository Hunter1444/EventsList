import React from 'react';
import Card from './../components/Card';
import Nav from './../components/Nav';
import { connect } from 'react-redux';

class Favorite extends React.Component{
  render(){
    const cards = this.props.storeState.events.map((item, index) => {
      const element =  <Card key={index}
                        favorite={item.favorite}
                        cardId={item.id}
                        description={item.description}
                        price={item.price}
                        title={item.title}/>

      if(item.favorite){
        return element;
      }
    })
    return(
      <div className="container">
        <Nav/>
        <div className="row card-row">
          {cards}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    storeState: state
  })
)(Favorite)
