var dog = require('./dog');
var cat = require('./cat');
var tom = new cat();
var Dog = new dog('tom');
Dog.eat(tom);
console.log(Dog);