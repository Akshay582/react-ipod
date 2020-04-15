import React, { Component } from 'react';

class Screen extends Component {
    render() {
        return (
            <div className="Screen">
                <strong>iPod.js</strong>
                <ul>
                    <li id="songs" className="active">Songs</li>
                    <li id="albums">Albums</li>
                    <li id="artists">Artists</li>
                    <li id="playlists">Playlists</li>
                </ul>
            </div>
        )
    }
}

export default Screen;