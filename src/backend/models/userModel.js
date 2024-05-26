// models/User.js
const mysql = require("mysql2");
const bcrypt = require("bcrypt");

const connection = mysql.createConnection({
  host: "your_mysql_host",
  user: "your_mysql_user",
  password: "your_mysql_password",
  database: "your_database_name",
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database as id " + connection.threadId);
});

module.exports = class User {
  constructor(username, firstName, lastName, email, password) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  async save() {
    const hash = await bcrypt.hash(this.password, 10);
    return new Promise((resolve, reject) => {
      connection.execute(
        "INSERT INTO user (username, firstName, lastName, email, password) VALUES (?, ?, ?, ?, ?)",
        [this.username, this.firstName, this.lastName, this.email, hash],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  static findByUsername(username) {
    return new Promise((resolve, reject) => {
      connection.execute(
        "SELECT * FROM user WHERE username = ?",
        [username],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }

  static findByEmail(email) {
    return new Promise((resolve, reject) => {
      connection.execute(
        "SELECT * FROM user WHERE email = ?",
        [email],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  }
};
