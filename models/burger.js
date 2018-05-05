let orm = require('../config/orm.js');

let burger = {
  selectAll: function(db){
    orm.selectAll('burgers', function(res){
      db(res);
    });
  },
  insertOne: function(cols, vals, db){
    orm.insertOne('burgers', cols, vals, function(res){
      db(res);
    });
  },
  updateOne: function(objColVals, condition, db){
    orm.updateOne('burgers', objColVals, condition, function(res){
      db(res);
    });
  }
};

module.exports = burger;