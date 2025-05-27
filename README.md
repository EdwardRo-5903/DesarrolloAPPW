# Proyecto To-Do List: Tareas y Metas

Este proyecto es una aplicación web para gestionar tareas y metas personales. Permite agregar, listar y eliminar tareas y metas, además de asignarles una fecha límite.

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- Node.js (versión LTS recomendada)  
- npm (incluido con Node.js)  
- Git  
- MongoDB (local o en la nube)

## Estructura del proyecto

El proyecto está dividido en dos partes:

- **Frontend**: Interfaz de usuario.  
- **Backend**: API para gestionar tareas y metas.

## Conexión a base de datos

El backend está conectado a una base de datos MongoDB. Se utiliza MongoDB para almacenar de forma persistente las tareas y metas.  
Se implementó un CRUD completo (Crear, Leer, Actualizar y Eliminar) sobre las colecciones de tareas y metas.

## Cómo ejecutar el proyecto

### Clonar el repositorio

Clona este repositorio en tu máquina local:
```bash
git clone <URL-del-repositorio>
```

### Navegar a la carpeta del proyecto

```bash
cd ProyectoDWeb/proyectdw
```

### Ejecutar el backend

```bash
cd backend
npm install
npm start
```

El backend estará disponible en: `http://localhost:3000`

### Ejecutar el frontend

```bash
cd frontend
npm install
npm start
```

El frontend estará disponible en: `http://localhost:3001`

## Endpoints del backend

### Tareas (`/tasks`)
- `GET /tasks`: Obtiene todas las tareas.  
- `POST /tasks`: Agrega una nueva tarea.  
- `DELETE /tasks/:id`: Elimina una tarea por ID.  
- `PUT /tasks/:id`: Actualiza una tarea existente. ✅ Nuevo

### Metas (`/goals`)
- `GET /goals`: Obtiene todas las metas.  
- `POST /goals`: Agrega una nueva meta.  
- `DELETE /goals/:id`: Elimina una meta por ID.  
- `PUT /goals/:id`: Actualiza una meta existente. ✅ Nuevo

## Notas importantes

- **Middleware de autenticación**: Todas las solicitudes al backend requieren un encabezado `Authorization` con una API key válida:
  ```
  Authorization: mi-api-key
  ```

- **Persistencia de datos**: Ahora los datos se almacenan en MongoDB, lo que permite mantenerlos aunque el servidor se reinicie.

- **Puertos**:  
  - Backend: `http://localhost:3000`  
  - Frontend: `http://localhost:3001`

## Tecnologías utilizadas

### Frontend:
- React  
- Sass  

### Backend:
- Node.js  
- Express  
- MongoDB y Mongoose ✅ Nuevo  
- Middleware personalizado  

### Gestión de estado:
- Redux Toolkit  

## Contribuciones

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.  
2. Crea una nueva rama:  
   ```bash
   git checkout -b nombre-de-tu-rama
   ```
3. Realiza tus cambios y haz un commit:  
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Sube tus cambios:  
   ```bash
   git push origin nombre-de-tu-rama
   ```
5. Abre un Pull Request en GitHub.

## Autor

Proyecto desarrollado por **EdwardDev**.
