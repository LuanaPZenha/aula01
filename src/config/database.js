const mongoose = require("mongoose")

async function connectionMongoDB() {
    try{
        // Usa a variável de ambiente se existir, caso contrário usa localhost
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/LZDB';
        
        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 2000 // 2 seconds timeout
        })
        console.log("MongoDB Conectado");
    } catch(error){
        console.error("Erro ao conectar no MongoDB:", error.message);
    }    
}

module.exports = connectionMongoDB;