const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const userRotas = require("./Routes/userRotas");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const connection = require("./Database/connection");
connection();

app.use('/api/usuarios', userRotas);

app.listen(5000, () => {
    console.log("Servidor inicializado na porta 5000");
});