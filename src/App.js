import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';
import {
  Index,
  Entry1,
  Entry2,
} from './Entries';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar">
            <ul>
              <li>Miguel’s Journal</li>
              <li>
                <Link to="/entries/">My Journal Entries</Link>
              </li>
            </ul>
          </nav>

          <div className="content">
            <Route path="/entries/" component={Index} />
            <Route path="/entries/1" component={Entry1} />
            <Route path="/entries/2" component={Entry2} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
