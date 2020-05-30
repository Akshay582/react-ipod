// To run js after the dom has been loaded
document.addEventListener("DOMContentLoaded", ready);

function ready() {
    var parentTouchArea = document.getElementById('controls-box');
    var target = document.getElementById('wheel-outer');
    var region = ZingTouch.Region(parentTouchArea);
    
    // Running zingtouch event listener for catching the click rotation of the mouse
    region.bind(target, 'rotate', function(event){
        if(event.detail.distanceFromOrigin > 0 &&
            event.detail.angle > 15){
                // Sensing the clockwise rotation of the mouse resulting in downward scrolling of the side menu
                downward();          
        }
        else if(event.detail.distanceFromOrigin < 0 &&
            event.detail.angle > 15){
                // Sensing the anti-clockwise rotation of the mouse resulting in upward scrolling of the side menu
                upward();
        }
    })
}

// modular functions for readability
function downward() {
    if(document.getElementById("songs").classList.contains("active")){
        document.getElementById("songs").classList.remove("active");
        document.getElementById("albums").classList.add("active");
    }
    else if(document.getElementById("albums").classList.contains("active")){
        document.getElementById("albums").classList.remove("active");
        document.getElementById("artists").classList.add("active");
    }
    else if(document.getElementById("artists").classList.contains("active")){
        document.getElementById("artists").classList.remove("active");
        document.getElementById("playlists").classList.add("active");
    }
    else if(document.getElementById("playlists").classList.contains("active")){
        document.getElementById("playlists").classList.remove("active");
        document.getElementById("songs").classList.add("active");
    }    
}

function upward() {
    if(document.getElementById("songs").classList.contains("active")){
        document.getElementById("songs").classList.remove("active");
        document.getElementById("playlists").classList.add("active");
    }
    else if(document.getElementById("playlists").classList.contains("active")){
        document.getElementById("playlists").classList.remove("active");
        document.getElementById("artists").classList.add("active");
    }
    else if(document.getElementById("artists").classList.contains("active")){
        document.getElementById("artists").classList.remove("active");
        document.getElementById("albums").classList.add("active");
    }
    else if(document.getElementById("albums").classList.contains("active")){
        document.getElementById("albums").classList.remove("active");
        document.getElementById("songs").classList.add("active");
    }
}