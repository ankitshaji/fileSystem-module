//using fileSystem files moduleObject with all its exported methods
//the moduleObject pattern - mimics a classObject - avoids global variable name space pollution by keeping it scoped to moduleObject

//built in JSmodules pattern vs CommonJS modules pattern
//built in JSmodules pattern uses import keyword,CommonJS modules pattern uses keyword/method module.require()
//module.export = {functiionObjectOne,functionObjectTwo} //adds functionObjects to the export object //property on moduleObject
//functionObjectOneuses - short hand method decalration in an object
const fsObject = module.require("fs"); //moduleObject.method() //returns an Object with all the exported methods in fs moduleObject
// console.dir(module)
// console.dir(fsObject)

//globalObject in nodejs - similar to windowObject or documentObject in browser
const argv = global.process.argv; //array
//if index undefine ie falsy value then use truthy string with default value
const index2String = argv[2] || "Project"; //string

//sync vs async methods of fsObject

//async method - continue thread even if not complete then come back
// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
//object.method(stringObject/folderName,Object,callbackFunction)
// fsObject.mkdir("Dogs", { recursive: true }, (err) => {
//   console.log("inside callback");
//   if (err) throw err;
// });
// console.log("Runs before fsObject.mkdir async method executes callback");

//sync method - do not continue thread until complete
// fsObject.mkdirSync("Cats");
// console.log("Only executes after mkdirSync method");

//sync method of fsObject need try catch if it breaks
try {
  //makes folder in directory where node process is running
  //index2String is folder name taken in as argument
  fsObject.mkdirSync(index2String);
  console.log(`folder created ${index2String}`);
  //create files in folder - relative path 
  fsObject.writeFileSync(`${index2String}/index.html`, "<!--commenteData-->");
  fsObject.writeFileSync(`${index2String}/app.js`, "//commentData");
  fsObject.writeFileSync(`${index2String}/style.css`, "/*commentData*/");
  console.log(`files created inside ${index2String}`);
} catch (e) {
  console.log("Error occured");
  console.dir(e);
}
//bash shell commands -
//node boilerPlate.js folderName
//rm -rf folderName
