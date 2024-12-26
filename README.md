# Todo List React App

Una aplicación de lista de tareas construida con React y Vite que permite gestionar tareas diarias con persistencia de datos usando json-server.

## 🚀 Características

- ✅ Crear y visualizar tareas
- 🔄 Marcar tareas como completadas
- ❌ Eliminar tareas 
- 🎨 Interfaz de usuario intuitiva

## 🛠️ Tecnologías Utilizadas

- React
- Vite
- JSON Server
- CSS

## 📋 Prerrequisitos

- Node.js (versión 14 o superior)
- npm (viene con Node.js)

## 🔧 Instalación

1. Clona el repositorio:

git clone [URL-del-repositorio]

2. Instala las dependencias:

npm install

3. Instala JSON Server globalmente:

npm install -g json-server



## 🚀 Ejecutar el Proyecto

1. Inicia el servidor JSON (en una terminal):

```bash
json-server --watch db.json
```

2. En otra terminal, inicia la aplicación React:

```bash
npm run dev
```

3. Abre tu navegador y visita:

```
http://localhost:5173
```

## 📁 Estructura del Proyecto

```
todo-list-react/
├── src/
│   ├── components/
│   │   ├── TodoItem.jsx
│   │   ├── TodoList.jsx
│   │   └── AddTodoForm.jsx
│   ├── App.jsx
│   └── main.jsx
├── db.json
├── package.json
└── README.md
```

## 💡️ Backend

La aplicación utiliza un backend construido con Express y MongoDB a través de Mongoose. A continuación se describen los endpoints disponibles y su funcionalidad.

### Endpoints

- **GET /todos**: Obtiene todas las tareas.
- **GET /todos/:id**: Obtiene una tarea específica por su ID.
- **POST /todos**: Crea una nueva tarea. Se espera un cuerpo de solicitud con los siguientes campos:
  - `title`: Título de la tarea (requerido).
  - `completed`: Estado de la tarea (booleano, opcional).
  - `description`: Descripción de la tarea (opcional).
  - `creator`: Creador de la tarea (opcional).
  
- **PUT /todos/:id**: Actualiza una tarea existente por su ID. Se puede enviar un cuerpo de solicitud con los campos que se desean actualizar.
  
- **DELETE /todos/:id**: Elimina una tarea específica por su ID.

### Estructura del Proyecto Backend

```
todo-api/
├── controllers/
│   └── todoController.js  // Controlador que maneja la lógica de las tareas
├── models/
│   └── todoModel.js       // Modelo de datos para las tareas
├── routes/
│   └── todoRoutes.js      // Rutas para manejar las solicitudes de tareas
├── app.js                 // Archivo principal de la aplicación
├── db.js                  // Conexión a la base de datos
└── package.json           // Dependencias y scripts del proyecto
```

Esta estructura permite una fácil escalabilidad y mantenimiento del código, separando la lógica de negocio, los modelos de datos y las rutas de la API.

## 💡 Uso

- Para añadir una tarea: Completa el formulario y presiona "Add"
- Para marcar como completada: Haz click en el checkbox
- Para eliminar: Presiona el botón "Delete"
- Las tareas persisten después de recargar la página.


