var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");
var clientSchema = mongoose.Schema({
    lastname : String,
    firstname : String,
    address : String
});
var Client = mongoose.model("clients", clientSchema);
console.log("Before the create() statement");
Client.create({lastname:"Obama", firstname:"Barack", address:"Washington"}).then(function(doc) {
    console.log("The client is inserted into the collection", 
    doc);
});
console.log("After the create() statement");