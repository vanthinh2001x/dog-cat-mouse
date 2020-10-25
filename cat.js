var mouse = require('./mouse');
function cat(){
    this.stomach = [];
}
cat.prototype.eat = function(Mouse){
    if(Mouse instanceof mouse){
        this.stomach.push(mouse);
    }
 else{
     throw new Error('can not only eat mouse!');
 }
}
module.exports = cat;
//aa