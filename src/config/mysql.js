const mysql = require('mysql2/promise');

async function connectionMySQL() {
    let attempts = 0;
    while (attempts < 5) {
        try {
            const connection = await mysql.createConnection({
                host: process.env.MYSQL_HOST || 'mysql',
                user: process.env.MYSQL_USER || 'root',
                password: process.env.MYSQL_ROOT_PASSWORD || 'root',
                database: process.env.MYSQL_DATABASE || 'loja_de_carros',
                port: 3306
            });
            console.log("MySQL Conectado");
            return connection;
        } catch (error) {
            attempts++;
            console.log(`Tentativa ${attempts} de conectar ao MySQL falhou. Tentando novamente em 5s...`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }
    console.error("Não foi possível conectar ao MySQL após várias tentativas.");
}

module.exports = connectionMySQL;
