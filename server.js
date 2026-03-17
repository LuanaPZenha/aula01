const app = require('./src/app');
const connectMongo = require('./src/config/database');

const PORT = 3000;

async function startServer() {
    await connectMongo();

    
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta: ${PORT}`);
    });

}

startServer();