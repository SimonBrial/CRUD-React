import { createContext, useReducer } from "react";
import { v4 } from 'uuid';
import { userReducer } from './userReducer';

const initialState = {
    users: []
}
const UserContext = createContext();

const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(userReducer, initialState);

    const addUser = (user) => dispatch({ type: 'ADD_USER', payload: { ...user, id: v4() } });

    const deleteUser = (id) => dispatch({ type: 'DELETE_USER', payload: id });

    const updateUser = (user) => dispatch({ type: 'UPDATE_USER', payload: user });

    return (
        <UserContext.Provider value={{ ...state, addUser, deleteUser, updateUser }}>
            {children}
        </UserContext.Provider>
    )
};

export { UserContext, ContextProvider };
