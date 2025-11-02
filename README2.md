# Sysinfo API – Déploiement continu sur Azure

## 📘 Description
Projet réalisé dans le cadre du TD4 de Virtualisation à l'ENSTA Bretagne.  
Cette application Node.js expose des informations système (CPU, RAM, OS, etc.) via une API REST et est déployée automatiquement sur **Azure App Service** grâce à une chaîne **CI/CD** entre GitHub, Docker Hub et Azure.

## 🔗 Liens utiles
- **Dépôt GitHub :** https://github.com/arckalyss/sysinfo-api  
- **Application déployée :** https://sysinfo-api-app-brbghjh4fyeyafcv.francecentral-01.azurewebsites.net/api/v1/sysinfo  
- **Image Docker Hub :** https://hub.docker.com/r/arckalyss/sysinfo-api  

## ⚙️ Fonctionnement
- `/api/v1/sysinfo` : renvoie les informations système.
- Le serveur écoute sur le port **8000**.

## 🧩 Technologies
- Node.js + Express  
- Docker  
- Docker Hub  
- Azure App Service  

## 🚀 Déploiement continu (CI/CD)
1. Le code est pushé sur GitHub.
2. Une GitHub Action ou un Docker build génère une nouvelle image.
3. L’image est poussée sur Docker Hub.
4. Un **webhook** notifie **Azure App Service**, qui redéploie automatiquement l’application.

## ✅ Test de validation
Lors du test final, la clé `testCI: "Ceci est un test CI/CD5"` a confirmé que l’application a bien été redéployée automatiquement.

## 👤 Auteur
**Roman Dard** – ENSTA Bretagne  
TD4 : Virtualisation – Novembre 2025
