var fs = require("fs");
console.log("File content:");
fs.readFile("file1.txt", { encoding : "utf-8" }, function(error, data) {
  console.log(data);
});
console.log("The readFile() method was called");

var colors = require("colors");
console.log(colors.random("First text in random colors"));
console.log(colors.random("Second text in random colors"));