const sql = require('mssql/msnodesqlv8');

// Cấu hình thông tin kết nối tới SQL Server
const config = {
  server: 'localhost',
  user: 'sa',
  password: 'Kiet170901',
  database: 'Student',
  driver: "msnodesqlv8"
};

const conn = new sql.ConnectionPool(config).connect().then(pool => {console.log('Kết nối thành công')});

module.exports = {
    conn: conn, 
    sql: sql
}