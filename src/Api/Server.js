const express = require("require")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express();


const PORT = 5000;

app.use(cors());
app.use(express.json());


const connection = require("./Database/connection")
connection();

app.listen(5000, () => {
    console.log("Inicializando o Servidor na Porta: " + PORT)
});