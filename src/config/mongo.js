const mongoose = require("mongoose");

async function connectionMongoDB() {
    try {
        // No Docker, o host deve ser o nome do serviço definido no docker-compose (mongodb)
        // A porta interna do container mongo é 27017, mesmo que a externa seja 27019
        const mongoURI = process.env.MONGO_URI || 'mongodb://mongodb:27017/loja_de_carros';
        
        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 2000
        });
        console.log("MongoDB Conectado");
    } catch (error) {
        console.error("Erro ao conectar no MongoDB:", error.message);
    }
}

module.exports = connectionMongoDB;
