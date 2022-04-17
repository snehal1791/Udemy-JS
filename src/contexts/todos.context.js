//todos
//all methods to interact w/ todo

import React, { createContext } from "react";
import useToDoState from '../hooks/useToDoState';

export const TodosContext = createContext();

export function TodosProvider(props) {
    const todoStuff = useToDoState([])
    return (
        <TodosContext.Provider
            value={ todoStuff }>
            {props.children}
        </TodosContext.Provider>
    )
}