// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const $Stopwatch = {
  $tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  $isRunning: false,
  $mins: 0,
  $secs: 0,
  $millisecs: 0,
  $laps: [],
  // DO NOT EDIT ABOVE THIS LINE

//Get the Start Button
  //link start button to start running
//Get the Lap Button
  //if stopwatch is running 
    //New lap will appear
  //If stopwatch is off lap button does nothing
//Get the stop/reset
  //if stopwatch is running 
    //Stopwatch stops
  //if stopwatch is not running 
    //the time must reset to 0

  $advanceTenMillisecs: function(){
    this.millisecs += 10;
    if (this.millisecs >= 1000){
      this.millisecs -= 1000;
      this.secs ++;
    }
    else if(this.secs >= 60){
      this.secs >= 60;
      this.mins ++;
    }

  },
  $reset: function(){
    this.mins = 0;
    this.secs = 0;
    this.millisecs = 0;
    this.laps = [];
  },
  $start: function(){
    if (!isRunning.isRunning) {
      this.isRunning = true;
      this.tickClock();

    }
  },
  $stop: function(){
    this.isRunning = false;
  },
  $lap: function(){
    // Your Code Here
  }
};

/// User Interface ///
const $ViewEngine = {
  $updateTimeDisplay: function(mins, secs, millisecs){
    $("#mins").text(Stopwatch.min) = ViewHelpers.zeroFill(mins, 2);
    $("#sec").text(Stopwatch.secs);
    $("#millisecs").text(Stopwatch.millisecs) = ViewHelpers.zeroFill(millisecs/10, 2);
  },
  $updateLapListDisplay: function(laps){
    var $laps = Stopwatch.laps;
    var $lapList = document.getElementById('lap-list');
    lapList.innerHTML = '';
    for (var i = 0; i < laps.length; i++) {
      lapList.innerHTML += "\
      <li>" +
        ViewHelpers.zeroFill(laps[i].mins, 2) + ":" +
        ViewHelpers.zeroFill(laps[i].secs, 2) + ":" +
        ViewHelpers.zeroFill(laps[i].millisecs/10, 2) +
      "</li>";
    }// Your Code Here
  },
};
const $ViewHelpers = {
  $zeroFill: function(number, length){
  var $str = number.toString();
  let $numZeroes = Math.mas(length - str.length, 0);
  for(var i = 0; i < (length - str.length); i++){
    str = "0" + str;
  }
  },
};

/// Top-Level Application Code ///
const $AppController = {
  $handleClockTick: function(){
    ViewEngine.updateLapListDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  $handleClickStart: function() {
    if(!Stopwatch.isRunning){
      Stopwatch.start();
    }
  },
  $handleClickStopReset: function(){
    if(Stopwatch.isRunning){
      Stopwatch.stop();
    } else{
      Stopwatch.reset;
      ViewEngine.updateTimeDisplay(0,0,0);
      ViewEngine.updateLapListDisplay(Stopwatch.lap);

    }
  },
  $handleClickLap: function(){
    if(Stopwatch.isRunning){
      Stopwatch.lap;
      ViewEngine.updateLapListDisplay(Stopwatch.lap);
    } 
  }
};

$window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  $('#start').on('click', ($event) => {
    AppController.handleClickStart;
    console.log('start');
    });
  $('#lap').on('click', function(){
    AppController.handleClickLap;
    console.log('lap');
  });
  $('#stop').on('click', function(){
    AppController.handleClickStopReset;
    console.log("stop");
  });
};
