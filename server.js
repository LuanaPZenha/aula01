const app = require('./src/app');
const connectMongo = require('./src/config/mongo');
const connectMySQL = require('./src/config/mysql');

const PORT = 3000;

async function startServer() {
    // Tenta conectar nos dois bancos
    await connectMongo();
    await connectMySQL();

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta: ${PORT}`);
    });
}

startServer();
