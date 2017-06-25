'use strict';
var myTable = document.getElementById('stores');
var allStores = [];

//Array for the different times of day
var timesOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm:'];

//Constructor function
function Store(name, minCust, maxCust, avgCookieSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hourlySales = [];
  this.hourlyCust = [];
  this.totalSales = 0;
  this.calcSalesByHour();
  allStores.push(this);
};

Store.prototype.calcCustPerHour = function ()  {
  for(var i = 0; i < timesOfDay.length; i++){
    var cust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    this.hourlyCust.push(cust);
  }
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

Store.prototype.render = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  for(var i = 0; i < timesOfDay.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlySales[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalSales;
  trEl.appendChild(tdEl);
  myTable.appendChild(trEl);
};

function makeHeader() {
  var thEl = document.createElement('th');
  var trEl = document.createElement('tr');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for(var i = 0; i < timesOfDay.length; i++){
    var thEl = document.createElement('th');
    // console.log('hello');
    thEl.textContent = timesOfDay[i];
    trEl.appendChild(thEl);
  }

  thEl = document.createElement('th');
  thEl.textContent = 'Grand Total';
  trEl.appendChild(thEl);
  myTable.appendChild(trEl);
}

function renderAllLocations(){
  for(var i = 0; i < allStores.length; i++){
    allStores[i].render();
  }
}

function makeFooter() {
  removeFooter();
  var tfootEl = document.createElement('tfoot');
  tfootEl.id = 'tableFooter';
  var trEl = document.createElement('tr');
  trEl.textContent = 'Hourly Totals';
  var dailyTotalAllLocations = 0;
  for(var i = 0; i < timesOfDay.length; i++){
    var total = 0;
    for(var j = 0; j < allStores.length; j++){
      total += allStores[j].hourlySales[i];
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = total;
    trEl.appendChild(tdEl);
    dailyTotalAllLocations += total;
    // trEl.appendChild(thEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = dailyTotalAllLocations;
  trEl.appendChild(tdEl);
  tfootEl.appendChild(trEl);
  myTable.appendChild(tfootEl);
}

function removeFooter(){
  var footerRef = document.getElementById('tableFooter');
  if (footerRef !== null){
    footerRef.parentElement.removeChild(footerRef);
  }

}
//event listener
function makeStore(event){
  event.preventDefault();
  myTable.innerHtml = '';
  var name = event.target.name.value;
  var minCust = parseInt(event.target.minCust.value);
  var maxCust = parseInt(event.target.maxCust.value);
  var avgCookieSale = parseFloat(event.target.avgCookieSale.value);
  var addStore = new Store(name, minCust, maxCust, avgCookieSale);
  event.target.name.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgCookieSale.value = null;
  addStore.render();

  makeFooter();
  console.log('first calls');
}

//Variables ready to make the individual store objects
var pikePlace = new Store('Pikes Market', 23, 65, 6.3);
var seaTac = new Store ('Seatac', 3, 24, 1.2);
var seaCent = new Store('Seattle Center', 11, 38, 3.7);
var capHill = new Store('Capitol Hill', 30, 28, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);

makeHeader();
renderAllLocations();
makeFooter();
console.log('last calls');

form.addEventListener('submit', makeStore);
