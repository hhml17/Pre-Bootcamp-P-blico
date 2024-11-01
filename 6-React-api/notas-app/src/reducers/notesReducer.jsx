// src/reducers/notesReducer.js
export const initialState = {
    notes: [],
    filter: 'Todas'
  };
  
  export const notesReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_NOTE':
        return {
          ...state,
          notes: [...state.notes, action.payload]
        };
      case 'DELETE_NOTE':
        return {
          ...state,
          notes: state.notes.filter((_, index) => index !== action.payload)
        };
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload
        };
      default:
        return state;
    }
  };
  