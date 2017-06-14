'use strict';

//Array for the different times of day
var timesOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm:', 'Grand Total:'];
//Variables ready to make the individual store objects
var pikePlace = new Store('Pikes Market', 23, 65, 6.3);
var seaTac = new Store ('Seatac', 3, 24, 1.2);
var seaCent = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 30, 28, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//Constructor function
function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourlySales = [];
  this.hourlyCust = [];
  this.totalSales = 0;
};

Store.prototype.calcCustPerHour = function ()  {
  for(var i = 0; i < timesOfDay.length; i++){
    var cust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.hourlyCust.push(cust);
  }
  // return this.hourlyCust;
};

Store.prototype.calcSalesByHour = function(){
  this.calcCustPerHour();
  for(var i = 0; i < timesOfDay.length; i++){
    var cookies = Math.ceil(this.hourlyCust[i] * this.avgCookieSale);
    this.hourlySales.push(cookies);
    this.totalSales += cookies;
  }
  return this.hourlySales;
};

//Rendering in JS for lab 7
function Stores(name, minCust, maxCust, avgCookieSale, hourlySales, hourlyCust, totalSales){
  var allStores = [];

  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourlySales = [];
  this.hourlyCust = [];
  this.totalSales = 0;
  allStores.push(this);
}
function storeTable(){

}
//calls on each store function to run
// createList(pikePlace);
// createList(seaTac);
// createList(seaCent);
// createList(capHill);
// createList(alki);
