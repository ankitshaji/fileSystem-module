//index.js - entry point/main file of this directory
//so if we require("directoryName") node will look for index.js file
//and export what ever that file has exported
const blue = module.require("./blue"); //blueObject
const sadie = module.require("./sadie"); //sadieObject
const janet = module.require("./janet"); //janetObject

const allCats = [blue, sadie, janet]; //object array
// console.dir(allCats);

module.exports = allCats; //array of objects
