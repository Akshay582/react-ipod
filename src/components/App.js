import React from 'react';
import '../App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="controls-box">
          <div id="wheel-outer">
            <span id="top">Top</span>
            <span id="left">Left</span>
            <span id="right">Right</span>
            <span id="bottom">Bottom</span>
            <div id="wheel-inner">
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
