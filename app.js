var timesOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm'];

var pikePlace = {
  name: 'Pikes Market',
  minCust: 23,
  maxCust: 65,
  avgCookiesPerSale: 6.3,
  calcCustPerHour: function (){
    var customers = Math.floor(Math.random() * (maxCust - minCust) + minCust);
    return customers;
    console.log(customers);
  },
  cookiesPerHour: function(){
    var hourlySales = [];
    for(var i = 0; i < 15; i++){
      var sales = this.custPerHour() * this.avgCookiesPerSale;
      hourlySales.push(Math.ceil(sales));
    }
