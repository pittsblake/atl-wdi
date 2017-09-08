// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// Data Management and Business Logic //
const CounterCollection = {
  lastCountId: 0,
  counters: [], // e.g. {countId: 3, count: 20}
  createCounter: function(){
    this.lastCountId++;
    this.counters.push({
      countId: this.lastCountId,
      count: 0
    });
    return this.lastCountId;
  },
  getCounterValue: function(countId){
    console.log(`read counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { return counter.count; }
  },
  incrementCounter: function(countId){
    console.log(`increment counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) {
      counter.count += 1;
      console.log(counter.count);
      return counter.count;
    }
  },
  destroyCounter: function(countId){
    console.log(`destroy counter #${countId}`);
    let counter = this.counters.find(function(counter){
      return counter.countId === countId;
    });
    if (counter) { counter.destroy(); }
    this.counters = this.counters.filter(function(counter){ //
      return counter.countId !== countId
    });
  }
};

// UI //
const Presenter = {
  insertCounterComponent: function(newCountId){
    console.log(`insert counter component #${newCountId}`);
    let counterList = document.getElementById('counter-list');
    let str = "<h3>Count: <span>0</span></h3><button class ='increment'> + 1 </button>";
    let newCounterComponent = document.createElement('div');
    newCounterComponent.innerHTML = str;
    newCounterComponent.dataset.countId = newCountId;
    counterList.appendChild(newCounterComponent);
    document.getElementsByClassName('increment')[0].onclick = AppController.onClickIncrement;

  },
  refreshCounterComponent: function(countId){
    console.log(`refresh counter component #${countId}`);
    let val = CounterCollection.getCounterValue(countId);
    document.querySelector(`[data-count-id]="${countId}"] span`).innerHTML = val;
  },
  removeCounterComponent: function(countId){             // REACH
    console.log(`remove counter component #${countId}`);
    // Your Code Here
  }
};

// Top-Level Application Control //
const AppController = {
  onClickNewCounter: function(event){

    CounterCollection.createCounter();
    Presenter.insertCounterComponent(CounterCollection.lastCountId);

  },
  onClickIncrement: function(event){
    let countId = Number(event.target.parentNode.dataset.countId);
    console.log(countId);
    CounterCollection.incrementCounter(countId);
    console.log("hello");
  },
  onClickDelete: function(event){                           // REACH
    // Your Code Here
  }
};

window.onload = function(){
  document.getElementById('new-counter').onclick = AppController.onClickNewCounter;
};
