// Johnny-Five is our JavaScript framework for accessing Arduino.
var jfive = require("johnny-five");
var board, led;

board = new jfive.Board();

// Similar to jQuery, we wait for the board to be ready.
board.on("ready", function() {

  // 10 represents the pin number that the LED is plugged into.
  led = new jfive.Led(10)

  // The LED blinks (i.e. turns on and off) every 1000 milliseconds.
  led.blink(1000);
  
});