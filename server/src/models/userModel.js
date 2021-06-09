var pool = require("../db/mariadb.js");
var sql;

// constructor
var User = function(user) {
  this.id = user.id;
  this.name = user.name;
  this.email = user.email;
  this.password = user.password;
  this.role = user.role;
};

User.findById = async (userId) => {
  sql = await pool.getConnection();
  try{
    const records = await sql.query(`SELECT * FROM User WHERE id = ${userId}`)
    if (records.length) {
      if (sql) sql.release(); //release to pool
      return records[0];
    }
    return null;
  } catch(err){
      console.log("error: ", err);
      if (sql) sql.release(); //release to pool
      return null;
  }
};

User.findOne = async (email, password) => {
  sql = await pool.getConnection();
  try{
    const records = await sql.query(`SELECT * FROM User WHERE email = "${email}" AND password = "${password}"`);
    if (records.length) {
      return records;
    }
    return null;
  }catch(err){
    console.log("error: ", err);
    return null;
  }
};

User.find = async () => {
  sql = await pool.getConnection();
  try{
    const records = await sql.query("SELECT * FROM User");
    if(records && records.length){
      return records;
    }
    return null;
  }catch(err){
    console.log("error: ", err);
    return null;  }
};

module.exports = User;