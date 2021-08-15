require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require('./routes')

// Permite que outros possar consumir essa API
const cors = require('cors');

// Para colocar o cors para funcionar temos que criar um middleware
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*"); //O * diz que qualquer aplicação pode fazer o consumo
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); //Quais métodos podem ser usados na API
    app.use(cors());
    next();
})

// Necessário para pegar informações JSON do req.body
app.use(express.json());

// Rotas do programa
app.use(routes); 

// Conexão com o bancov moongose
mongoose.connect(process.env.ACCESS_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(() =>{
    console.log('Conexão com o banco realizada com sucesso.');
}).catch((err) =>{
    console.log('Erro ao conectar ao banco:', err);
});

// Serviço do banco do back
const PORT = 8080

app.listen(PORT, () => {
    console.log("Servidor ativo em http://localhost:8080");
});
