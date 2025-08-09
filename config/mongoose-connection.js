const mongoose = require('mongoose');

mongoose
 
.connect("mongodb://localhost:27017/MONGODB_PROJECT")
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
})

module.exports = mongoose.connection;