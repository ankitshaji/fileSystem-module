//main file
//key/variables - Object destructuring
const { PI, square } = module.require("./math"); //when its not existing module in node_modules
//self created file then we need ./
const cats = require("./shelter"); //folder/directory//looks for index.js in it
console.dir(PI); 
console.dir(cats); //array of objects was what was exported from index.js 
