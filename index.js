var dog = require('./dog');
var cat = require('./cat');
var mouse = require('./mouse');

var Cat = new cat();
var Mouse = new mouse('Mickey');
var Dog = new dog();
try{
    Cat.eat(Dog);
} catch (errow){
    console.log('cat can\'t eat dog');
}
console.log(Cat);