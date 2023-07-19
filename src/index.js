const express = require('express');
const app = express();
const port = 3000;
const {conn,sql} = require('../connectDB/connectSQLSERVER');

app.use(express.json());

app.get('/', function(req,res){
    res.send(conn);
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});