'use strict';

var timesOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm:', 'Grand Total:'];

//Constructor function
function Store(name, minCust, maxCust,avgCookieSale) {
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

//Variables ready to make the individual store objects
var pikePlace = new Store('Pikes Market', 23, 65, 6.3);
var seaTac = new Store ('Seatac', 3, 24, 1.2);
var seaCent = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 30, 28, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//Renders the store numbers to the DOM
function createList(location){
  var container = document.createElement('section');
  container.innerHTML = '<h1>' + location.name + '</h1>';
  document.body.appendChild(container);

  var pairsList = [];

  for(var i = 0; i < timesOfDay.length; i++){
    pairsList.push(timesOfDay[i] + location.salesByHour()[i] + ' cookies');
  }

  var list = document.createElement('ul');
  var listArr = [];

  for (var i = 0; i < timesOfDay.length; i++) {
    listArr.push('<li>' + pairsList[i] + '</li>');
  }
  var full_list = listArr.join('');
  list.innerHTML = full_list;
  document.body.appendChild(list);
}
// //calls on each store function to run
// createList(pikePlace);
// createList(seaTac);
// createList(seaCent);
// createList(capHill);
// createList(alki);
