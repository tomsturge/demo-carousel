import React from 'react';

import './App.scss';
import Gallery from './components/Gallery';

const App: React.FunctionComponent = () => (
  <div className="App">
    <Gallery />
    <Gallery />
    <Gallery />
  </div>
);

export default App;
