import React from 'react';
import { Link } from "react-router-dom";

export * from './Entry1.js';
export * from './Entry2.js';

export const Index = () => (
  <div>
    <h1>See all my entries here!</h1>
    <ol>
      <li>
        <Link to="/entries/1">Week 1</Link>
      </li>
      <li>
        <Link to="/entries/2">Week 2</Link>
      </li>
    </ol>
  </div>
);