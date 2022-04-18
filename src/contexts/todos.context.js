//todos
//all methods to interact w/ todo

import React, { createContext } from "react";
import reducer from "../reducers/todo.reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

const defaultTodos = [];

export const TodosContext = createContext();

export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, reducer)
    return (
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }>
                {props.children}    
            </DispatchContext.Provider> 
        </TodosContext.Provider>
    )
}
