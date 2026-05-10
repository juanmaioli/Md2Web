# Usar la imagen ligera de Node 20 sobre Alpine Linux
FROM node:20-alpine

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias para aprovechar el cache de Docker
COPY package*.json ./

# Instalar dependencias de producción
RUN npm install --production

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto configurado
EXPOSE 8050

# Comando para iniciar la aplicación
CMD ["npm", "start"]
