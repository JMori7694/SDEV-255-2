var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");
var clientSchema = mongoose.Schema({
    lastname : String,
    firstname : String,
    address : String
});
var Client = mongoose.model("clients", clientSchema);
Client.find({ $or : [ { lastname : "Clinton" }, { firstname : "Barack"} ] })
.where("lastname")
.eq("Clinton")
.exec()
.then(function(clients) {
    console.log(clients); 
})
.catch(function(err) {
    console.log(err); 
});