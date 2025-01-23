# Usa una imagen base oficial de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos esenciales para instalar dependencias
COPY package.json package-lock.json ./

# Instala las dependencias con npm
RUN npm ci

# Copia el resto de los archivos y carpetas relevantes
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]
