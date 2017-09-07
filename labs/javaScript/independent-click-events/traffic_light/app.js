window.onload = function () {
  //grabs stop button
  var stopButton = document.querySelector('#stopButton');
  //grabs slow button
  var slowButton = document.querySelector('#slowButton');
  //grabs go button
  var goButton = document.querySelector('#goButton');

  //grabs stop light
  var stopLight = document.querySelector('#stopLight');
  //Grabs slow light
  var slowLight = document.querySelector('#slowLight');
  //Grabs go light
  var goLight = document.querySelector('#goLight');

  //Adds click function to stop button 
  stopButton.addEventListener('click', trafficLight.illuminateRed);
  //Add a click function to slowButton
  slowButton.addEventListener('click', trafficLight.illuminateYellow);
  //Adds a click function to goButton
  goButton.addEventListener('click', trafficLight.illuminateGreen);

}


var trafficLight = {
  illuminateRed: function (event) {
    trafficLight.clearLights();

    stopLight.style.background = 'red';
  },

  illuminateYellow: function (event) {
    trafficLight.clearLights();

    slowLight.style.background = 'yellow';
  },

 illuminateGreen: function(event) {
   trafficLight.clearLights();

    goLight.style.background = 'green';
  },

  clearLights: function () {
    stopLight.style.background = 'black';
    slowLight.style.background = 'black';
    goLight.style.background = "black";
  }
}
