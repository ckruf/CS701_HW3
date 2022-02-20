window.onload = init;

// register the event handler for button

function init() {
	var startButton = document.getElementById("startButton");
	//startButton.onclick = getLocation;
    //startButton.onclick = disableButton(startButton);
    startButton.addEventListener("click",disableButton);
    startButton.addEventListener("click",getLocation);
    position = 
    setInterval(function(){ updateMyLocation(); },5000);


  /*  $('#startButton').one('submit', function() {
        $(this).find('input[type="submit"]').attr('disabled','disabled');
    }); */
    
}

function disableButton(){
    startButton.disabled = "true";
}

function updateMyLocation(position){
    var currentLatitude = document.getElementById("currentLatitude");
    var currentLongitude = document.getElementById("currentLongitude");

    // currentLatitude.innerHTML = "Current Latitude: ";
    // currentLongitude.innerHTML = "Current Longitude: ";
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    latitude += Math.random() / 100;
    longitude -= Math.random() / 100;
    
    // currentLatitude.innerHTML += String(latitude);
    // currentLongitude.innerHTML += String(longitude);
    console.log(`Current Latitude:${latitude}`);
    currentLatitude.innerHTML = `Current Latitude:${latitude}`;
} 

function getLocation() {

    // asynchronous call with callback function specified
    navigator.geolocation.getCurrentPosition(displayLocation);

}

// callback function on success
function displayLocation(position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;


    document.getElementById("latitude").innerHTML = 
            "Latitude: " + latitude;
    document.getElementById("longitude").innerHTML = 
            "Longitude: " + longitude;
 

}
// Handling error
function handleError(error) {
    switch(error.code) {
        case 1:
            updateStatus("The user denied permission");
            break;
        case 2:
            updateStatus("Position is unavailable");
            break;
        case 3:
            updateStatus("Timed out");
            break;
    }
}
function updateStatus(message) {
    document.getElementById("status").innerHTML = 
        "<strong>Error</strong>: " + message;
}

