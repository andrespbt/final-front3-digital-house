export const globalReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return {
        ...state,
        isDarkMode: !state.isDarkMode,
      };
    }

    case 'ADD_DATA': {
      return {
        ...state,
        data: action.payload,
      };
    }

    case 'ADD_FAVORITE': {
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    }

    case 'REMOVE_FAVORITE': {
      return {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload),
      };
    }

    case 'START_FETCH': {
      return {
        ...state,
        isFetching: true,
      };
    }

    case 'FINISH_FETCH': {
      return {
        ...state,
        isFetching: false,
      };
    }

    default: {
      throw new Error(`Action type ${action.type} doesn't exists.`);
    }
  }
};
