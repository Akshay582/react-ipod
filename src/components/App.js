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
      clickedSongs: undefined,
      clickedAlbums: undefined,
      clickedArtists: undefined,
      clickedPlaylists: undefined
    }
  }
  handle = () => {
    if(document.getElementById("songs").classList[0]){
      this.setState({
        clickedSongs:true
      })
    }else if(document.getElementById("albums").classList[0]){
      this.setState({
        clickedAlbums:true
      })
    }else if(document.getElementById("artists").classList[0]){
      this.setState({
        clickedArtists:true
      })
    }else if(document.getElementById("playlists").classList[0]){
      this.setState({
        clickedPlaylists:true
      })
    }
    
  }
  render() {
    const {
      clickedSongs,
      clickedAlbums,
      clickedArtists,
      clickedPlaylists
    } = this.state;
    return (
      <div className="App">
      {
      clickedSongs ? <Songs /> : 
      clickedAlbums ? <Albums /> : 
      clickedArtists ? <Artists /> : 
      clickedPlaylists ? <Playlists /> :
      <Screen /> 
      }
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
