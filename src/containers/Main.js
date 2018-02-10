import React from 'react';
import Card from './../components/Card';
import FilterBar from './../components/FilterBar';
import Nav from './../components/Nav';
import { sortBy } from 'lodash';
import { connect } from 'react-redux';

class Main extends React.Component{
  render(){
    const currentPriceSort = this.props.storeState.currentSort;
    const currentFilterType = this.props.storeState.currentFilter.type;
    const currentFilterNameReg = new RegExp(this.props.storeState.currentFilter.name, 'gi');
    let cards = this.props.storeState.events.map((item, index) => {
      const element =  <Card key={index}
                        favorite={item.favorite}
                        cardId={item.id}
                        description={item.description}
                        price={item.price}
                        title={item.title}/>

      if(currentFilterType !== ''){
        if(currentFilterType === item.type && (item.title.search(currentFilterNameReg) > -1
        || item.description.search(currentFilterNameReg) > -1)){
          return element
        }
      } else if(item.title.search(currentFilterNameReg) > -1 || item.description.search(currentFilterNameReg) > -1){
        return element
      }
    })

    if(currentPriceSort === 'increase'){
      cards = sortBy(cards, ['props.price']);
    }

    if(currentPriceSort === 'decrease'){
      cards = sortBy(cards, ['props.price']).reverse();
    }

    return(
      <div className="container">
        <Nav/>
        <FilterBar/>
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
)(Main)
