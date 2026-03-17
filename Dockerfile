# Use uma imagem base do Node.js
FROM node:22-alpine

# Crie o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie os arquivos de dependência
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta que a aplicação usa
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
