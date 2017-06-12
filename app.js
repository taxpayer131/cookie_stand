var timesOfDay = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

var firstAndPike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  custPerHour: function (){
    var customers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    return customers;
    console.log(customers);
  },
