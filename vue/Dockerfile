# --- Étape 1 : Build de l'application (Node.js) ---
FROM node:20-alpine AS build-stage

WORKDIR /app

# On installe les dépendances en premier pour profiter du cache Docker
COPY package*.json ./
RUN npm install

# Copier le reste du code et construire le projet
COPY . .
RUN npm run build

# --- Étape 2 : Serveur de production (Nginx) ---
FROM nginx:stable-alpine AS production-stage

# On copie notre config personnalisée dans Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# On copie les fichiers de build
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]