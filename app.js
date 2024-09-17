require('dotenv').config();
require("./src/db/mongoDbConnection");
const express = require("express");
const app = express();
const cors = require('cors');
const routes = require('./routes');
const PORT = 8080;

app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*"); //O * diz que qualquer aplicação pode fazer o consumo
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); //Quais métodos podem ser usados na API
    app.use(cors());
    next();
});
app.use(express.json());
app.use(routes); 

app.listen(PORT, () => {
    console.log("Servidor ativo na porta 8080");
});
