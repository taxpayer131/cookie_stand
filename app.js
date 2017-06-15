'use strict';

var timesOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm:', 'Grand Total:'];

//Pike's Market object
var pikePlace = {
  name: 'Pikes Market',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  custPerHour: function (){
    var cust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return cust;
  },
  salesByHour: function(){
    var hourlySales = [];
    for(var i = 0; i < 15; i++){//15 items in the array, one for every hour between 6am and 8pm
      var sales = this.custPerHour() * this.avgCookieSale;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var k = 0; k < 15; k++){
      totalSales = hourlySales[k] + totalSales;
    }
    hourlySales.push(totalSales);
    return hourlySales;
  },
};

//SeaTAc object
var seaTac = {
  name: 'SeaTac',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  custPerHour: function (){
    var cust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return cust;
  },
  salesByHour: function(){
    var hourlySales = [];
    for(var i = 0; i < 15; i++){
      var sales = this.custPerHour() * this.avgCookieSale;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var k = 0; k < 15; k++){
      totalSales = hourlySales[k] + totalSales;
    }
    hourlySales.push(totalSales);
    return hourlySales;
  },
};
//Seattle Center object
var seaCent = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 2.7,
  custPerHour: function (){
    var cust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(cust);
    return cust;
  },
  salesByHour: function(){
    var hourlySales = [];
    for(var i = 0; i < 15; i++){
      var sales = this.custPerHour() * this.avgCookieSale;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var k = 0; k < 15; k++){
      totalSales = hourlySales[k] + totalSales;
    }
    hourlySales.push(totalSales);
    console.log(hourlySales);
    return hourlySales;
  },
};

//Capitol Hill object
var capHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  custPerHour: function (){
    var cust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return cust;
  },
  salesByHour: function(){
    var hourlySales = [];
    for(var i = 0; i < 15; i++){
      var sales = this.custPerHour() * this.avgCookieSale;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var k = 0; k < 15; k++){
      totalSales = hourlySales[k] + totalSales;
    }
    hourlySales.push(totalSales);
    console.log(hourlySales);
    return hourlySales;
  },
};

//Alki object
var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  custPerHour: function (){
    var cust = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    console.log(cust);
    return cust;
  },
  salesByHour: function(){
    var hourlySales = [];
    for(var i = 0; i < 15; i++){
      var sales = this.custPerHour() * this.avgCookieSale;
      hourlySales.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var k = 0; k < 15; k++){
      totalSales = hourlySales[k] + totalSales;
    }
    hourlySales.push(totalSales);
    console.log(hourlySales);
    return hourlySales;
  },
};
//Renders the store numbers to the DOM
function createList(location){
  var container = document.createElement('section');
  container.innerHTML = '<h1>' + location.name + '</h1>';
  document.body.appendChild(container);

  var pairsList = [];

  for(var k = 0; k < 16; k++){
    pairsList.push(timesOfDay[k] + location.salesByHour()[k] + ' cookies');
  }

  var list = document.createElement('ul');
  var listArr = [];

  for (var x = 0; x < 16; x++) {
    listArr.push('<li>' + pairsList[x] + '</li>');
  }
  var full_list = listArr.join('');
  list.innerHTML = full_list;
  document.body.appendChild(list);
}
//calls on each store function to run
createList(pikePlace);
createList(seaTac);
createList(seaCent);
createList(capHill);
createList(alki);
