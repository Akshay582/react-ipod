import React, { Component } from 'react';

export default class Songs extends Component {
    render() {
        return (
            <div className="Songs">
                <div className="page-selected">
                    <div>
                        <img src= "https://i.scdn.co/image/ab67616d0000b273a9f6c04ba168640b48aa5795" 
                        style={ {height: 70, width: 70} }/>
                    </div>
                    <div>02 My boy</div>
                    <div>Billie Eilish</div>
                    <audio controls
                    style={ {height: 30, width: 200} }>The audio for some reason is not working.</audio>
                </div>
            </div>
        )
    }
}
