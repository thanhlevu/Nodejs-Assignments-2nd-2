'use strict';
const mysql = require('mysql2');
let fs = require('fs');
const connect = () => {
  // create the connection to database
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
  });
  return connection;
};

const select = (connection, callback, res) => {
  // simple query
  connection.query(
      'SELECT * FROM bc_media',
      (err, results, fields) => {
        //console.log(results); // results contains rows returned by server
        //console.log(fields); // fields contains extra meta data about results, if available
        console.log(err);
        callback(results, res);
      },
  );
};

const insert = (data, connection, callback) => {
  // simple query
  connection.execute(
      'INSERT INTO bc_media (category, title, details, thumbnail, image, original, coordinates) VALUES (?, ?, ?, ?, ?, ?, ?);',
      data,
      (err, results, fields) => {
          console.log("data"+data);
        // console.log("result: "+results); // results contains rows returned by server
        // console.log("field: "+fields); // fields contains extra meta data about results, if available
        // console.log(err);
        console.log("data.filename"+data.filename);
        callback();
      },
  );
};

const update = (data, connection, callback) => {
    // simple query
    connection.execute(
        'UPDATE bc_media SET category=?, title=?, details=? WHERE mID =?',
        data,
        (err, results, fields) => {
            // console.log(results); // results contains rows returned by server
            // console.log(fields); // fields contains extra meta data about results, if available
            console.log(err);
            callback();
        },
    );
};

const del = (data, connection, callback) => {
    // simple query
    connection.execute(
        'DELETE FROM bc_media WHERE mID =?',
        data,
        (err, results, fields) => {
            // console.log(results); // results contains rows returned by server
            // console.log(fields); // fields contains extra meta data about results, if available
            console.log(err);
            callback();
        },
    );
    //fs.unlink(../public/uploads/)
};

module.exports = {
  connect: connect,
  select: select,
  insert: insert,
  update: update,
  delete: del
};