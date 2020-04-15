document.addEventListener("DOMContentLoaded", ready);

function ready() {
    var parentTouchArea = document.getElementById('controls-box');
    var target = document.getElementById('wheel-outer');
    var region = ZingTouch.Region(parentTouchArea);
    
    region.bind(target, 'rotate', function(event){
        if(event.detail.distanceFromOrigin > 0 &&
            event.detail.angle > 15){
                forward();          
        }
        else if(event.detail.distanceFromOrigin < 0 &&
            event.detail.angle > 15){
                reverse();
        }
    })
}

function forward() {
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

function reverse() {
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