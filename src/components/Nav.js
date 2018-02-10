import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component{
  render(){
    return(
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="active" className="nav-link" role="tab" >Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/favorite" activeClassName="active" className="nav-link" role="tab">Избранное</NavLink>
        </li>
      </ul>
    )
  }
}
