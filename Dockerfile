# --- Stage 1 : Compilation / build ---
FROM node:20-alpine AS builder

WORKDIR /app

# Copier package.json et package-lock.json pour l'installation des dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers sources pour compiler
COPY . .

# Compiler TypeScript
RUN npm run build

# --- Stage 2 : Exécution ---
FROM node:20-alpine AS runner

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires depuis le stage builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Utiliser l'utilisateur node déjà présent dans l'image
USER node

# Exposer le port
EXPOSE 8000

# Lancer l'application
CMD ["node", "dist/index.js"]
