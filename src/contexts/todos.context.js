//todos
//all methods to interact w/ todo

import React, { createContext } from "react";
import { useReducer } from "react";
import reducer from "../reducers/todo.reducer";

const defaultTodos = [];

export const TodosContext = createContext();

export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(reducer, defaultTodos)
    return (
        <TodosContext.Provider value={ todos }>
            <DispatchContext.Provider value={ dispatch }>
                {props.children}    
            </DispatchContext.Provider> 
        </TodosContext.Provider>
    )
}
