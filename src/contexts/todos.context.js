//todos
//all methods to interact w/ todo

import React, { createContext } from "react";
import { useReducer } from "react";
import reducer from "../reducers/todo.reducer";

const defaultTodos = [];

export const TodosContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(reducer, defaultTodos)
    return (
        <TodosContext.Provider
            value={ { todos, dispatch } }>
            {props.children}
        </TodosContext.Provider>
    )
}