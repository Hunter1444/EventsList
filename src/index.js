import style from './scss/index.scss';
import Main from './containers/Main';
import Favorite from './containers/Favorite';
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import reducer from './reducers/index';

const json = [
  {
    title: "Концерт Depeche Mode",
    description: "Описание концерта здесь",
    price: 300,
    type: "concert",
  },
  {
    title: "Выставка Модильяни",
    description: "Описание выставки здесь",
    price: 200,
    type: "exhibition",
  },
  {
    title: "Титл Модильяни",
    description: "дескрипшн выставки здесь",
    price: 2500,
    type: "exhibition",
    favorite: true
  },
]

const store = createStore(reducer);
store.dispatch({type: 'LOAD_EVENTS', payload:json})

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <div>
        <Route path="/favorite" component={Favorite}/>
        <Route exact path="/" component={Main}/>
      </div>
    </Provider>
  </Router>,
  document.getElementById('root')
);
