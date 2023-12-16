var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");
var clientSchema = mongoose.Schema({
    lastname : String,
    firstname : String,
    address : String
});
var Client = mongoose.model("clients", clientSchema);
Client.deleteOne({ lastname : "Clinton" }, function(err, response) {
    console.log("After Clinton's removal");
    console.log("response = ", response);
    Client.find(function(err, clients) {
        console.log("clients = ", clients);
    });
});