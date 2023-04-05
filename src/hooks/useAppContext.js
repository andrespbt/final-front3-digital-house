import { useContext } from 'react';
import odontoApi from '../api/odontoApi';
import { ContextGlobal } from '../Components/utils/global.context';

export const useAppContext = () => {
  const context = useContext(ContextGlobal);

  if (!context) {
    throw new Error(`There is no context.`);
  }

  const [state, dispatch] = context;

  const changeTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  const fetchAllDentists = async () => {
    try {
      dispatch({ type: 'START_FETCH' });
      const { data } = await odontoApi.get();
      dispatch({ type: 'ADD_DATA', payload: data });
    } catch (error) {
      console.log(error);
      throw new Error('Server error. Try again later.');
    } finally {
      setTimeout(() => {
        dispatch({ type: 'FINISH_FETCH' });
      }, 1000);
    }
  };

  const fetchSingleDentist = async id => {
    try {
      dispatch({ type: 'START_FETCH' });
      const { data } = await odontoApi.get(`/${id}`);
      dispatch({ type: 'ADD_DATA', payload: data });
    } catch (error) {
      console.log(error);
      throw new Error('Server error. Try again later.');
    } finally {
      setTimeout(() => {
        dispatch({ type: 'FINISH_FETCH' });
      }, 1000);
    }
  };

  const addFavorite = data => {
    dispatch({ type: 'ADD_FAVORITE', payload: data });
  };

  const removeFavorite = id => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  return {
    addFavorite,
    changeTheme,
    dispatch,
    fetchAllDentists,
    fetchSingleDentist,
    removeFavorite,
    state,
  };
};
