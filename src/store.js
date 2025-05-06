import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoSlice';
import goalReducer from './reducers/goalsSlice';
import logger from './middleware/logger'; // Middleware personalizado
import checker from './middleware/checker'; // Middleware personalizado

export default configureStore({
  reducer: {
    todos: todoReducer, // Reducer para las tareas
    goals: goalReducer, // Reducer para las metas
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, checker), // Agrega middlewares personalizados
});