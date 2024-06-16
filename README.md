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

# Folders fundamentales del proyecto
- Login y registro
![image](https://github.com/LascanoAldahir/Examen-Login-Blog/assets/139184732/a8d60724-c3d1-4784-8287-8b56bc0ed120)
<br> Aqui nosotros tenemos la funcionalidad y estetica de nuestras interfaces de login y registro <br>
Cabe recalcar que Firebase gestiona los metodos de autenticación ya sea por correo o google. <br>
![image](https://github.com/LascanoAldahir/Examen-Login-Blog/assets/139184732/9114fd46-c2e5-4a5d-8ce9-6d39ac256837) <br>

Ademas, una vez que nosotros iniciamos sesion, nosotros podremos publicar, texto, imagenes jpeg y archivos PDFs, tambien ubicacion.
<br>
![image](https://github.com/LascanoAldahir/Examen-Login-Blog/assets/139184732/cdd07550-8493-43c1-9e79-b8592756e023) <br>
![image](https://github.com/LascanoAldahir/Examen-Login-Blog/assets/139184732/62e9d4e4-763a-4bee-a3cb-b8d98a53f049) <br>





