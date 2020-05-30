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
      screen: true,
      clickedSongs: undefined,
      clickedAlbums: undefined,
      clickedArtists: undefined,
      clickedPlaylists: undefined
    }
  }
  menu = () => {
    // for going back to the side menu
    this.setState({
      screen: true,
      clickedSongs: false,
      clickedAlbums: false,
      clickedArtists: false,
      clickedPlaylists: false
    })
    console.log('in back');
  };
  handle = () => {
    // for going to the component with element selected in the menu
    if(document.getElementById("songs").classList[0]){
      this.setState({
        screen: false,
        clickedSongs:true
      })
    }else if(document.getElementById("albums").classList[0]){
      this.setState({
        screen: false,
        clickedAlbums:true
      })
    }else if(document.getElementById("artists").classList[0]){
      this.setState({
        screen: false,
        clickedArtists:true
      })
    }else if(document.getElementById("playlists").classList[0]){
      this.setState({
        screen: false,
        clickedPlaylists:true
      })
    }
  };
  render() {
    const {
      clickedSongs,
      clickedAlbums,
      clickedArtists,
      clickedPlaylists,
      screen
    } = this.state;
    return (
      <div className="App">
      {
        // Selecting the component according to the state
      screen ? <Screen /> :
      clickedSongs ? <Songs /> : 
      clickedAlbums ? <Albums /> : 
      clickedArtists ? <Artists /> : 
      clickedPlaylists ? <Playlists /> : ''
      }
        <div id="controls-box">
            <div id="wheel-outer">
              <span id="top" onClick={() => this.menu()}>MENU</span>
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
