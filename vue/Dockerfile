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

# Copier les fichiers compilés de l'étape précédente vers le dossier Nginx
# Note : Vite génère par défaut les fichiers dans le dossier "dist"
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Exposer le port 80 (port par défaut de Nginx et standard pour le Web)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]