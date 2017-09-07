//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function (small, large, total) {
  const smallBarrel = 60;
  const largeBarrel = (825 - 120) / 5;
  return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function (fuelPrice, milesPerGallon) {
  const earthCircumference = 24901;
  totalGallons = earthCircumference / milesPerGallon;
  totalPrice = totalGallons * fuelPrice;
  return totalPrice;
};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function (gallonsCostco, percentPureCostco, gallonsKirkland, percentKirkland) {
  let totalGallonsOfCostcoPure = (percentPureCostco/100) * gallonsCostco;
  let totalGallonsOfKirklandPure = (percentKirkland/100) * gallonsKirkland;
  let totalGallonsOfPure = totalGallonsOfCostcoPure + totalGallonsOfKirklandPure;
  let totalGallonsOfJuice = gallonsCostco + gallonsKirkland;
  let totalPercentOfPureJuice = totalGallonsOfPure / totalGallonsOfJuice;
  return totalPercentOfPureJuice;
};

// Find the total amount of pure fruit juice (gal)
// Total of Costco pure fruit juice:
// percentage pure fruit juice * number of gallons
// Total of Kirkland pure fruit juice:
// percentage pure fruit juice * number of gallons
//Add Costco pure fruit juice total + Kirkland pure fruit juice total
//Find the total amount of juice (gal):
// Total of Costco juice + Total of Kirkland Juice
// Calculate (total pure fruit juice) / (total juice)

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
