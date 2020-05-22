
// Importing orm.js (require)
var orm = require("../config/orm");

var burger = {
   // function for select all burgers from table 
 selectAll: function(cb){
     orm.all("burgers", function(res){
         cb(res);
     });
 },

};


module.exports = burger;













module.exports = burger;