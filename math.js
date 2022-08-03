//user created module file with functionObjects and variable
//2 functions and 1 variable
const add = (x, y) => x + y;
const PI = 3.14159;
const square = (x) => x * x;

module.exports.add = add; //adding method to exportsObject
module.exports.PI = PI; //adding property to exportsObject
module.exports.square = square; //adding method to exportsObject
//OR
//exports.square = square; //adding method to exportsObject //exports is shortcut variable
//OR
//module.exports = math
const math = {
  add: add,
  PI: PI,
  square: square,
};
//OR
//module.export.add=(x,y)=>x+y
