window.onload = init;

// register the event handler for button

function init() {
  var startButton = document.getElementById("startButton");
  //startButton.onclick = getLocation;
  //startButton.onclick = disableButton(startButton);
  startButton.addEventListener("click", disableButton);
  startButton.addEventListener("click", getLocation);
  setInterval(function () {
    updateMyLocation();
  }, 5000);

  /*  $('#startButton').one('submit', function() {
        $(this).find('input[type="submit"]').attr('disabled','disabled');
    }); */
}

function disableButton() {
  startButton.disabled = "true";
}

function updateMyLocation(position) {
  var currentLatitudeValue = document.getElementById("currentLatitudeValue");
  var currentLongitudeValue = document.getElementById("currentLongitudeValue");
  var latitudeValue = document.getElementById("latitudeValue");
  var longitudeValue = document.getElementById("longitudeValue");
  var latitudeOffset = Math.random() / 100;
  var longitudeOffset = Math.random() / 100;
  var latitude;
  var longitude;

  if (currentLatitudeValue.innerHTML.length < 1) {
    latitude = latitudeValue.innerHTML;
    latitude = parseFloat(latitude);
  } else {
    latitude = currentLatitudeValue.innerHTML;
    latitude = parseFloat(latitude);
  }

  if (currentLongitudeValue.innerHTML.length < 1) {
    longitude = longitudeValue.innerHTML;
    longitude = parseFloat(longitude);
  } else {
    longitude = currentLongitudeValue.innerHTML;
    longitude = parseFloat(longitude);
  }

  var updatedLatitude = latitude + latitudeOffset;
  var updatedLongitude = longitude - longitudeOffset;

  currentLatitudeValue.innerHTML = updatedLatitude;
  currentLongitudeValue.innerHTML = updatedLongitude;
}

function getLocation() {
  // asynchronous call with callback function specified
  navigator.geolocation.getCurrentPosition(displayLocation);
}

// callback function on success
function displayLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  document.getElementById("latitudeValue").innerHTML = latitude;
  document.getElementById("longitudeValue").innerHTML = longitude;
}
// Handling error
function handleError(error) {
  switch (error.code) {
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
