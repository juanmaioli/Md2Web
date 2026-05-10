# Usar la imagen 'slim' de Node 20 basada en Debian para máxima compatibilidad con módulos nativos
FROM node:20-slim

# Instalar dependencias del sistema mínimas para compilar módulos nativos
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto configurado
EXPOSE 8050

# Comando para iniciar la aplicación
CMD ["npm", "start"]
