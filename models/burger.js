var orm = require("../config/orm");


var burger = {
 selectAll: function(cb){
     orm.all("burgers", function(res){
         cb(res);
     });
 }

};


module.exports = burger;













module.exports = burger;