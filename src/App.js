import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import { Profile } from './Pages/Profile';
import { Entries } from './Pages/Entries';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar">
            <ul>
              <li>Miguel’s Journal</li>
              <li>
                <Link to="/entries">My Journal Entries</Link>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>

          <div className="content">
            <Route path="/profile" component={Profile} />
            <Route path="/entries" component={Entries} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
