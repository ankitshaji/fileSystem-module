//NPM is a libarary of packages/tools other people have written
//npm is a command line tool to install these packages in our node projects
//auto installed with nodejs runtime
//npm tool commands -
//npm init , npm -v ,npm install packageName,npm start (adds {"start": "node index.js"} under "scripts":{} in package.json)
//npm install -g packageName (adds node_modules globally User/AppData/Roaming/npm)
//npm packages -
//eg react npm package , express npm package
//if we do not initialize before running npm install packageName
//it will creates node_modules directory in home directory
//creates package-lock.json in home directory - record of content of node_modules directory
//normally after we node initialize ,we have a local copy of node_modules for our specifc project
//node_modules - all packages/modules in it are dependecies of the package/module i wanted
//use index.js naming convention
//npm init - creates package.json
//package.json - javascript object notation
//all modules/packages include one
//we also put it inside all node apps/modules/packages we make
//it contains metadata/information about the current project/package/module
//(npm i packageName) adds packageNames into "dependencies" in package.json
//"dependencies": {"packageName":"versionNo",} 
// when node_modules is ommited/deleted - node looks in package.json
//to auto install dependencies of the current project/package/module  with command (npm install) 

//adding 3 npm packages - adding to node_modules and package.json's dependencies
const jokes = require("give-me-a-joke"); //since its a package/module we use its name
// console.dir(jokes); //jokes is an object with methods in it
const colors = require("colors"); //since its a package/module we use its name
// console.dir(colors);//colors is an object with methods and properties in it
// const cowsay = require("cowsay") //npm link cowsay  //we need to link if we want to use global package locally
// console.dir(cowsay)
const figlet = require("figlet") //get module/package
// console.dir(figlet) //functionObject
//look at how to use each package on the npm website

// To get a random dad joke //asyncronous  method takes in callback as argument and executes when ready
jokes.getRandomDadJoke(function (joke) {
  console.log(colors.green(joke));
});
console.log(colors.green("hello")); // outputs green text //method takes in argument of string
//function expression has callback we execute when ready
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(colors.green(data))
});