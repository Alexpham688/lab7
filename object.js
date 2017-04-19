
var groceryList = [
  {
    food: 'milk',
    price: 3.40
  },
  {
    food: 'carrots',
    price: 6.33
  },
  {
    food: 'turkey',
    price: 8.33
  },
  {
    food: 'yogurt',
    price: 6.99
  },
  {
    food: 'potatoes',
    price: 7.00
  },
  {
    food: 'cheese',
    price: 7.50
  },
  {
    food: 'oranges',
    price: 5.90
  },
  {
    food: 'tomatoes',
    price: 4.34
  },
  {
    food: 'avocado',
    price: 4.90
  },
  {
    food: 'bread',
    price: 3.30
  }];
  var total=0;
  var taxOne= .06;
  var taxTwo= 1.06;
  groceryList.forEach(function(i){
    console.log(i.price, i.food);
  total+=i.price;

});
 console.log('total is ' + total+ ' without tax');

console.log( 'total is ' + total * taxTwo + ' with tax')
