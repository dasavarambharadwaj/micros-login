import mysql from "mysql2"
function connectDB() {
  this.connection = mysql.createPool({
    host: process.env.HOST,
    port: parseInt(process.env.PORT),
    user: process.env.MY_SQL_USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    connectTimeout: 30000,
  });
  this.testConnection = async function() {
    return await new Promise((resolve, reject) => {
      this.connection.getConnection(function (err) {
        if (err) {
          console.log(err);
          resolve(false);
        } else {
          console.log("Connection Succeeded");
          resolve(true);
        }
      });
    });
  }
}
export default connectDB
