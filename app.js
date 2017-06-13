'use strict';

var timesOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm:', 'Grand Total:'];

//Pike's Market constructor function
function Store(name, minCust, maxCust,avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourlySales = [];
  this.hourlyCust = [];
};

Store.prototype.calcCustPerHour = function ()  {
  for(var i = 0; i < timesOfDay.length; i++){
    var cust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.hourlyCust.push(cust);
  }
  return this.hourlyCust;
};

Store.prototype.calcSalesByHour = function(){
  this.calcHourlySales = [];
  for(var i = 0; i < timesOfDay.length; i++){
    var cookis = this.hourlyCust[i] * avgCookieSale;
    this.hourlySales.push(cookies);
  }
  return this.hourlySales;
};

Store.prototype.calcTotalSales = function(){
  for(var i = 0; i < 15; i++){
    totalSales = hourlySales[i] + totalSales;
    hourlySales.push(totalSales);
  }
  return hourlySales;
};
var pikePlace = new Store('Pikes Market', 23, 65, 6.3);
var seaTac = new Store ('Seatac', 3, 24, 1.2);
var seaCent = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 30, 28, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

//Pike's Market object
// var pikePlace = {
//   name: 'Pikes Market',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   custPerHour: function (){
//     var cust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     return cust;
//   },
//   salesByHour: function(){
//     var hourlySales = [];
//     for(var i = 0; i < 15; i++){//15 items in the array, one for every hour between 6am and 8pm
//       var sales = this.custPerHour() * this.avgCookieSale;
//       hourlySales.push(Math.ceil(sales));
//     }
//   var totalSales = 0;
//   for(var i = 0; i < 15; i++){
//     totalSales = hourlySales[i] + totalSales;
//   }
//   hourlySales.push(totalSales);
//   return hourlySales;
// }

//SeaTAc object
// var seaTac = {
//   name: 'SeaTac',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   custPerHour: function (){
//     var cust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     return cust;
//   },
//   salesByHour: function(){
//     var hourlySales = [];
//     for(var i = 0; i < 15; i++){
//       var sales = this.custPerHour() * this.avgCookieSale;
//       hourlySales.push(Math.ceil(sales));
//     }
//     var totalSales = 0;
//     for(var i = 0; i < 15; i++){
//       totalSales = hourlySales[i] + totalSales;
//     }
//     hourlySales.push(totalSales);
//     return hourlySales;
//   },
// };
// //Seattle Center object
// var seaCent = {
//   name: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 2.7,
//   custPerHour: function (){
//     var cust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     console.log(cust);
//     return cust;
//   },
//   salesByHour: function(){
//     var hourlySales = [];
//     for(var i = 0; i < 15; i++){
//       var sales = this.custPerHour() * this.avgCookieSale;
//       hourlySales.push(Math.ceil(sales));
//     }
//     var totalSales = 0;
//     for(var i = 0; i < 15; i++){
//       totalSales = hourlySales[i] + totalSales;
//     }
//     hourlySales.push(totalSales);
//     console.log(hourlySales);
//     return hourlySales;
//   },
// };
//
// //Capitol Hill object
// var capHill = {
//   name: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   custPerHour: function (){
//     var cust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     return cust;
//   },
//   salesByHour: function(){
//     var hourlySales = [];
//     for(var i = 0; i < 15; i++){
//       var sales = this.custPerHour() * this.avgCookieSale;
//       hourlySales.push(Math.ceil(sales));
//     }
//     var totalSales = 0;
//     for(var i = 0; i < 15; i++){
//       totalSales = hourlySales[i] + totalSales;
//     }
//     hourlySales.push(totalSales);
//     console.log(hourlySales);
//     return hourlySales;
//   },
// };
//
// //Alki object
// var alki = {
//   name: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   custPerHour: function (){
//     var cust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
//     console.log(cust);
//     return cust;
//   },
//   salesByHour: function(){
//     var hourlySales = [];
//     for(var i = 0; i < 15; i++){
//       var sales = this.custPerHour() * this.avgCookieSale;
//       hourlySales.push(Math.ceil(sales));
//     }
//     var totalSales = 0;
//     for(var i = 0; i < 15; i++){
//       totalSales = hourlySales[i] + totalSales;
//     }
//     hourlySales.push(totalSales);
//     console.log(hourlySales);
//     return hourlySales;
//   },
// };
// //Renders the store numbers to the DOM
// function createList(location){
//   var container = document.createElement('section');
//   container.innerHTML = '<h1>' + location.name + '</h1>';
//   document.body.appendChild(container);
//
//   var pairsList = [];
//
//   for(var i = 0; i < 16; i++){
//     pairsList.push(timesOfDay[i] + location.salesByHour()[i] + ' cookies');
//   }
//
//   var list = document.createElement('ul');
//   var listArr = [];
//
//   for (var i = 0; i < 16; i++) {
//     listArr.push('<li>' + pairsList[i] + '</li>');
//   }
//   var full_list = listArr.join('');
//   list.innerHTML = full_list;
//   document.body.appendChild(list);
// }
// //calls on each store function to run
// createList(pikePlace);
// createList(seaTac);
// createList(seaCent);
// createList(capHill);
// createList(alki);
