import React from 'react';

import Screen from './Screen';
import '../App.css'

function App() {
  return (
    <div className="App">
      <Screen />
        <div id="controls-box">
          <div id="wheel-outer">
            <span id="top">MENU</span>
            <span id="left"><i class="fas fa-fast-backward"></i></span>
            <span id="right"><i class="fas fa-fast-forward"></i></span>
            <span id="bottom"><i class="fas fa-play"></i></span>
          </div>
          <div id="wheel-inner">
          </div>
        </div>
    </div>
  );
}

export default App;
