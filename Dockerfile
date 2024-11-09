# Escolhe a imagem base oficial do Node.js com Alpine para ter uma imagem leve
FROM node:18-alpine

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos package.json e package-lock.json (ou yarn.lock)
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do projeto
COPY . .

# Compila o projeto Next.js
RUN npm run build

# Define a variável de ambiente para produção
# ENV NODE_ENV=production

# Expõe a porta 3000 para acessar o app no container
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "start"]