// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  price *= 100;
  change *= 100;  
  //Given price and payment amount
  //calculate the change
  let change = payment - price;
  if (change <= 0) {
    return [0,0,0,0];
    //If Price is more than payment return [0,0,0,0];
  } else {
  //Return an array like [Q,D,N,P]
  //Calculate Quarter
  const quarters = Math.floor(change / 25);
  change = change % 25;
  //Calculate Dimes
  const dimes = Math.floor(change / 10);
  change = change % 10;
  //Calculate Nickels
  const nickles = Math.floor(change / 5);
  change = change % 5;
  //Calcualte Pennies
  const pennies = Math.floor(change);

  return [quarters, dimes, nickles, pennies];
  }
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
