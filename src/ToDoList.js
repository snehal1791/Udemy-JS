import React, {useContext} from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ToDo from "./ToDo";
import { TodosContext } from "./contexts/todos.context"

function ToDoList() {
    const {todos} = useContext(TodosContext);
    if(todos.length) {
        return (
            <Paper>
                <List>
                    {todos.map((todo, idx) => (
                        <React.Fragment key={todo.id.toString()}>
                            <ToDo 
                                {...todo} />
                            {idx < todos.length - 1 && <Divider key={todo.id.toString()+'2'} />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        );
    }
    return null;
}

export default ToDoList;