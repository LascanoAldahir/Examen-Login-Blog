# Blog App

## Descripción

Esta es una aplicación de blog desarrollada en Angular e Ionic, que permite a los usuarios crear publicaciones con contenido, archivos adjuntos y su ubicación actual. También incluye funcionalidades de autenticación con Firebase.

## Requisitos

- Node.js y npm
- Angular CLI
- Ionic CLI
- Firebase Project

## Instalación

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/tuusuario/blog-app.git
   cd blog-app

2. **Instalar las dependencias**
   ```bash
    npm install

3. Configurar Firebase
   Crear un archivo src/environments/environment.ts con las credenciales de Firebase.

4. **Ejecucion**
   ```bash
    ionic serve

## Estructura del Proyecto
Este repositorio incluye archivos principales como blog.page.ts y blog.page.html que gestionan la lógica y la interfaz de la página de blog respectivamente. blog.page.ts integra Firebase para autenticación y almacenamiento, y utiliza Capacitor Geolocation para obtener la ubicación del usuario y mostrar un mapa estático con la ubicación en la interfaz de usuario.

Contribuciones
Contribuciones y mejoras son bienvenidas. Por favor, abre un issue o envía un pull request si encuentras errores o tienes sugerencias.





