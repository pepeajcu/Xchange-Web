# Usa una imagen base oficial de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia solo los archivos esenciales para instalar dependencias
COPY package.json package-lock.json yarn.lock ./

# Instala pnpm de manera global
RUN npm install -g pnpm

# Instala las dependencias
RUN pnpm install --frozen-lockfile

# Copia el resto de los archivos y carpetas relevantes
COPY . .

# Construye la aplicación
RUN pnpm run build

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["pnpm", "start"]
