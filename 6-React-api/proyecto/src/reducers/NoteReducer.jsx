// Estado inicial para las notas
export const initialState = {
    notes: [],    // Lista vacía de notas
    filter: 'Todas',   // Filtro por defecto es 'Todas'
  };
  
  // Reducer que maneja las acciones para agregar, eliminar y filtrar notas
  export function noteReducer(state, action) {
    switch (action.type) {
      // Acción para agregar una nueva nota
      case 'ADD_NOTE':
        return {
          ...state,
          notes: [...state.notes, { text: action.payload.text, priority: action.payload.priority, id: Date.now() }]
        };
  
      // Acción para eliminar una nota por ID
      case 'DELETE_NOTE':
        return {
          ...state,
          notes: state.notes.filter(note => note.id !== action.payload.id)
        };
  
      // Acción para cambiar el filtro de notas
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload.filter
        };
  
      // En cualquier otro caso, devuelve el estado sin cambios
      default:
        return state;
    }
  }
  