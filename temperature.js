var jfive = require("johnny-five");

board = new jfive.Board();

board.on("ready", function() {
  // We create a new sensor instance and define the sensor type and the pin it’s connected to.
  var tempSensor = new jfive.Thermometer({
    controller: "TMP36",
    pin: "A0"
  });

   // We add an event listener to the sensor and handle the incoming data.
  tempSensor.on("data", function() {
    // The data object also has a fahrenheit property, if that’s what we are after.
    console.log(this.celsius + "°C");
  });

});
