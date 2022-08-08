import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

  const initialState = {
    users: [],
    isLoading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const fetchUsers = async () => {
    setIsLoading();
    const responce = await fetch(`${GITHUB_URL}/users`);
    const data = await responce.json();

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  };

  //   set isLoading

  const setIsLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
