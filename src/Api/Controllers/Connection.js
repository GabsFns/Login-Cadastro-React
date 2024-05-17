const mongoose = require("mongoose");

async function main(){
    try{
        mongoose.set("strictQuery", true);
        await mongoose.connect(
            "url_banco_mongodb"
            );
            console.log("Conectado ao Banco");
    
        } catch (error){
        console.log(error)
    }
}



module.exports = main;