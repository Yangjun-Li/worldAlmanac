const mongoose = require("mongoose");
const db = mongoose.connection;
function init() {
    mongoose.connect("mongodb://admin:admin1@ds157439.mlab.com:57439/observer",{ useNewUrlParser: true });
    // mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds253891.mlab.com:53891/mini-mech",{ useNewUrlParser: true });
}
db.once("open",function(){
    console.log("--------------- mongoose connected successfully ---------------");
});

module.exports = init;