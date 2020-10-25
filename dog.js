var chalk = require('chalk');
function dog(name){
    this.name = name;
    this.stomach = [];
 }
 
 dog.prototype.eat = function(cat){
 this.stomach.push(cat);
 };

 dog.prototype.sayHi = function(){
     console.log('Hi! I am a dog. My name is ' + chalk.blue(this.name));
 }

 module.export = cat;