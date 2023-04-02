import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';

export const useAppContext = () => {
  const context = useContext(ContextGlobal);

  if (!context) {
    throw new Error(`useAppContext debe ser usado con ContextGlobal`);
  }

  const [state, dispatch] = context;

  const changeTheme = () => {
    dispatch({ type: 'CHANGE_THEME' });
  };

  return {
    state,
    dispatch,
    changeTheme,
  };
};
