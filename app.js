var timesOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm'];

//Pike's Place object
var pikePlace = {
  name: 'Pikes Market',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSale: 6.3,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (maxCust - minCust) + minCust);
    return customers;
    console.log(customers);
  },
  cookiesPerHour: function(){
    var salesByHour = [];
    for(var i = 0; i < 15; i++){
      var sales = this.custPerHour() * this.avgCookiesPerSale;
      salesByHour.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var c = 0; c < 15; c++){
      totalSales = salesByHour[j] + totalSales;
    }
    salesByHour.push(totalSales);
    console.log(salesByHour);
    return salesByHour;
  },
};
//SeaTac object
var seaTac = {
  name: 'SeaTac',
  minCust: 3,
  maxCust: 24,
  avgCookiesPerSale: 1.2,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (maxCust - minCust) + minCust);
    return customers;
    console.log(customers);
  },
  cookiesPerHour: function(){
    var salesByHour = [];
    for(var i = 0; i < 15; i++){
      var sales = this.custPerHour() * this.avgCookiesPerSale;
      salesByHour.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var c = 0; c < 15; c++){
      totalSales = salesByHour[j] + totalSales;
    }
    salesByHour.push(totalSales);
    console.log(salesByHour);
    return salesByHour;
  },
};//Seattle Center object
var seaCenter = {
  name: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgCookiesPerSale: 3.7,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (maxCust - minCust) + minCust);
    return customers;
    console.log(customers);
  },
  cookiesPerHour: function(){
    var salesByHour = [];
    for(var i = 0; i < 15; i++){
      var sales = this.custPerHour() * this.avgCookiesPerSale;
      salesByHour.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var c = 0; c < 15; c++){
      totalSales = salesByHour[j] + totalSales;
    }
    salesByHour.push(totalSales);
    console.log(salesByHour);
    return salesByHour;
  },
};

//Capitol Hill object
var capHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookiesPerSale: 2.3,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (maxCust - minCust) + minCust);
    return customers;
    console.log(customers);
  },
  cookiesPerHour: function(){
    var salesByHour = [];
    for(var i = 0; i < 15; i++){
      var sales = this.custPerHour() * this.avgCookiesPerSale;
      salesByHour.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var c = 0; c < 15; c++){
      totalSales = salesByHour[j] + totalSales;
    }
    salesByHour.push(totalSales);
    console.log(salesByHour);
    return salesByHour;
  },
};

//Alki object
var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookiesPerSale: 4.6,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (maxCust - minCust) + minCust);
    return customers;
    console.log(customers);
  },
  cookiesPerHour: function(){
    var salesByHour = [];
    for(var i = 0; i < 15; i++){
      var sales = this.custPerHour() * this.avgCookiesPerSale;
      salesByHour.push(Math.ceil(sales));
    }
    var totalSales = 0;
    for(var c = 0; c < 15; c++){
      totalSales = salesByHour[j] + totalSales;
    }
    salesByHour.push(totalSales);
    console.log(salesByHour);
    return salesByHour;
  },
};
function createList(location){
var container = document.createElement('section');
  container.innerHTML = '<h1>' + location.name + '</h1>';
  document.body.appendChild(container);

  var pairsList = [];

  for(var z = 0; z < 15; z++){
    pairsList.push(timesOfDay[z] + location.salesByHour()[z] + ' cookies');
  }
