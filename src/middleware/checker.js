const checker = (store) => (next) => (action) => {
    if (action.type === 'todos/addTodo' && action.payload.name === '') {
      console.warn('No se puede agregar una tarea vacía.');
      return;
    }
    return next(action);
  };
  
  export default checker;