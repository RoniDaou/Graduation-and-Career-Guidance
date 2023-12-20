// App.js

export const initialState = {
    isAuthenticated: false, 
  };
  
  export const reducer = (state, action) => {
    switch (action.type) {
      case 'USER':
        return {
          ...state,
          isAuthenticated: action.payload,
        };
      // Add other cases if needed
      default:
        return state;
    }
  };
  