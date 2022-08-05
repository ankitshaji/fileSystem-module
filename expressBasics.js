//server creation - express app
const express = require("express");
// console.dir(express); //functionObject
const app = express(); //execute - save return value in variable
//console.dir(app); //appObject - has methods

//app is listening for (HTTPstructured) requests
//server running locally on port:3000 //localhost:3000 reference to this machine
//:portNo are uniqie addresss for each app to run on/each server to listen on and let HTTP structured requests come to eg(port:8080)
app.listen(3000, () => {
  console.log("Callback executed - Listening on port 3000");
});
//localhost:3000 shows Cannot GET/ if we're not responding with any content

//when any HTTPmethod  (HTTP structure)request comes to localhost:3000 or /resource - execute callback in app.use()
//localhosr:3000 is stuck waiting for (http structure) response to be sent back
//On each (HTTP strucuted) request to localhost:3000 - express.method() passes in 2 arguments into callback when executing
//paramter1 - (http strucute)request converted/parsed to JSobject,parameter2 - (http strucuted) response converted/parsed to JSobject

// app.use((req, res) => {
// console.log("New Request Received");
//requestObject -method + header(accept:mimeType) + body
//console.dir(req.accepts("html")); //req.method("mime type") returns false if mime type not in accept
//console.dir(req.headers.accept); //accept:mime type
//console.dir(req.path); //eg localhost:3000/dogs - finds diffrent resource -returns "/dogs"
//responseObject - statusCode + header(Content-Type:mimeType) + body
//console.dir(res.set("Content-Type":"text/html")) //set content-type in header
//console.dir(res.send()); //auto sets content-length header
//res.send(argument) argument accepts diffrents data ,and sets content-type accordingly
//argument examples - ({user:"string"})-header{Content-Type:application/json} , ("String")header{Content-Type:text/plain}
//,(<p>html</p>) header{Content-Type:text/html}
//res.send("String, We got the request , this is the response"); //autoSet - header{Content-Type:application/json}
// });

//routing - incoming request with specific path(/resource) + HTTPmethod (request catching order matters)
//object.method("path",callback to execute when (HTTP strucuted)request arrives - that gets passed in 2 parameters from method)
//we comment out app.use() - (HTTP structured) request can only get sent back one (HTTP structured) response
//only (Httpmethod)GET (Http structured)requests can be sent through browser
//paths can be direct match(exact path) or pattern match(path with changing path :variable)

// "/" root path (direct match/exact path)
app.get("/", (req, res) => {
  console.log("'/' in root path");
  res.send("Root");
});

//HTTPmethod-get,pattern-path-"/r/:subreddit" - (not direct match/exact path)
//:subreddit is a path variable (path variable can be ommited)
app.get("/r/:subreddit", (req, res) => {
  console.log("(http structured)request received");
  //key into variable //object destructuring
  const { subreddit } = req.params; //obejct {subreddit:"value"} //path variables
  res.send(`<h1>This is a subreddit for ${subreddit}- response</h1>`); //headers{Content-Type:"text/html"}
});

//HTTPmethod-get,pattern-path-"/r/:subreddit:postId" - (not direct match/exact path)
//:subreddit and :pathId are path variable (path variable can be ommited)
app.get("/r/:subreddit/:pathId", (req, res) => {
  console.log("(http structured)request received");
  //key into variable //object destructuring
  const { subreddit, pathId } = req.params; //obejct {subreddit:"value"} //path variables
  res.send(
    `<h1>${pathId} : This is a subreddit for ${subreddit}- response</h1>`
  ); //headers{Content-Type:"text/html"}
});

//HTTPmethod-get,path-/search (direct match/exact path)
//?queryString - (?key=value&key=value)
//?q=value (most common keyName is q)
//?q=value&key2=value2 //queryString no "quotes" for value
app.get("/search", (req, res) => {
  //key into variable - object destructuring
  const { q, key2 } = req.query; //object {q:"value1",key2:"value2"}
  if (!q) {
    //becomes true if q = (undefined/null/"") ie false
    res.send("<h1>Nothing found if nothing queried</h1>"); //headers{Content-Type:"text/html"}
  } else {
    res.send(`<h1>The queryString value is ${q} & ${key2}</h1>`); //headers{Content-Type:"text/html"}
  }
});

//HTTPmethod-get,path-/cats (direct match/exact path)
app.get("/cats", (req, res) => {
  console.log("/cat path (Http structured)request");
  res.send("Meow"); //header{Content-Type:text/html}
});
//HTTPmethod-post (direct match/exact path)
app.post("/cats", (req, res) => {
  console.log("/cats path (Http structured)request");
  res.send("Httpmethod - post Meow"); //headers{Content-Type:"text/html"}
});

//HTTPmethod-get,path-/dogs (direct match/exact path)
app.get("/dogs", (req, res) => {
  console.log("/dog path request");
  res.send("Woof"); //header{Content-Type:text/html}
});

//catch all (Http structured) requests - needs to be at end - since we can only catch (http structured)request once - (not direct match/exact path)
//HTTPmethod-get,path-allOtherPaths
app.get("*", (req, res) => {
  console.log("In wrong path !");
  res.send("You are in wrong path !"); //headers{Content-Type:"text/html"}
});

//info -
//npm init -y //skip questions + create package.json contains current projects dependencies info
//directory name/app name in package.json needs to be lowercase
//old npm i packageName --save flag was needed to save module to dependenceis in package.json
//app need to be restarted each time code changes
//node index.js - manual restart
//using npm package nodemon to auto restart app on code change
//npm i -g nodemon  (global-to use command nodemon)
//nodemon index.js
