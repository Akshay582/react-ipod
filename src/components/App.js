import React, {Component} from 'react';

import Screen from './Screen';
import Songs from './Songs';
import Albums from './Albums';
import Artists from './Artists';
import Playlists from './Playlists';
import '../App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      clicked: false
    }
  }
  handle = () => {
      console.log(document.getElementById("songs").classList[0]);
  }
  render() {
    return (
      <div className="App">
      {!this.state.clicked ?
      <Screen /> :
      <Songs />}
        <div id="controls-box">
            <div id="wheel-outer">
              <span id="top">MENU</span>
              <span id="left"><i className="fas fa-fast-backward"></i></span>
              <span id="right"><i className="fas fa-fast-forward"></i></span>
              <span id="bottom"><i className="fas fa-play"></i></span>
            </div>
            <div id="wheel-inner" onClick={() => this.handle()}>
            </div>
        </div>
    </div>
    )
  }
}

export default App;
