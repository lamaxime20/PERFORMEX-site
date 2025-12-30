# Étape 1: Build de l'application Vue.js
FROM node:20-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json (ou yarn.lock)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source de l'application
COPY . .

# Exposer le port 5173
EXPOSE 5173

# Commande pour démarrer Nginx quand le conteneur démarre
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]