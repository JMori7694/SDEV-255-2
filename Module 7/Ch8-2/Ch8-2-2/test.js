var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mydb_test");
var clientSchema = mongoose.Schema({
    lastname : String,
    firstname : String,
    address : String
});
var Client = mongoose.model("clients", clientSchema);
Client.updateOne({ lastname : "Clinton" }, 
                 { address : "New York" })
.exec();