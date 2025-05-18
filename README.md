Proyecto To-Do List: Tareas y Metas

Este proyecto es una aplicación web para gestionar tareas y metas personales. Permite agregar, listar y eliminar tareas y metas, además de asignarles una fecha límite.

Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

Node.js (versión LTS recomendada)

npm (incluido con Node.js)

Git

Estructura del proyecto:

El proyecto está dividido en dos partes:

Frontend: Interfaz de usuario.

Backend: API para gestionar tareas y metas.

Cómo ejecutar el proyecto:

Clonar el repositorio Clona este repositorio en tu máquina local: git clone

Navegar a la carpeta del proyecto cd ProyectoDWeb/proyectdw

Ejecutar el backend Navega a la carpeta del backend: cd backend

Instala las dependencias: npm install

Inicia el servidor: npm start

El backend estará disponible en: http://localhost:3000

Ejecutar el frontend Navega a la carpeta del frontend: cd frontend

Instala las dependencias: npm install

Inicia la aplicación: npm start

El frontend estará disponible en: http://localhost:3001

Endpoints del backend

Tareas (/tasks)

GET /tasks: Obtiene todas las tareas.

POST /tasks: Agrega una nueva tarea.

DELETE /tasks/:id: Elimina una tarea por ID.

Metas (/goals)

GET /goals: Obtiene todas las metas.

POST /goals: Agrega una nueva meta.

DELETE /goals/:id: Elimina una meta por ID.

Notas importantes

Middleware de autenticación: Todas las solicitudes al backend requieren un encabezado Authorization con una API key válida: Authorization: mi-api-key

Datos en memoria: Los datos se almacenan en memoria, por lo que se perderán si el servidor se reinicia.

Puertos: Backend: http://localhost:3000 Frontend: http://localhost:3001

Tecnologías utilizadas:

Frontend:

React

Sass

Backend:

Node.js

Express

Middleware personalizado

Gestión de estado:

Redux Toolkit

Contribuciones

Si deseas contribuir al proyecto, sigue estos pasos:

Haz un fork del repositorio.

Crea una nueva rama: git checkout -b nombre-de-tu-rama

Realiza tus cambios y haz un commit: git commit -m "Descripción de los cambios"

Sube tus cambios: git push origin nombre-de-tu-rama

Abre un Pull Request en GitHub.

Autor

Proyecto desarrollado por EdwardDev.
