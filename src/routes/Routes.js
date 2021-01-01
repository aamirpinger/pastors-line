import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';

import Home from '../components/Home/Home';

function Routes() {
  return (
    <Router>
      <Route path='/' element={<Home />} />
      <Route path='contacts' element={<Home contacts />} />
    </Router>
  );
}

export default Routes;
