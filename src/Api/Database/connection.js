//8weCRGzaThgb2xA7
//gabriel0917py
//mongodb+srv://gabriel0917py:8weCRGzaThgb2xA7@cluster0.suoohit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const mongoose = require("mongoose");

async function main(){

    try {
        mongoose.set("strictQuery", true);
        await  mongoose.connect(
            "mongodb+srv://gabriel0917py:8weCRGzaThgb2xA7@cluster0.suoohit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
            );
        console.log("Conectado ao Banco!");    
    } catch(error){
        console.log(error);

    }
}
module.exports = main;