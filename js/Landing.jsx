// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="app">
    <div className="landing">
      <h1>Video Search</h1>
      <input type="text" placeholder="Search" />
      <Link to="/search">Browse All</Link>
    </div>
  </div>
);

export default Landing;
