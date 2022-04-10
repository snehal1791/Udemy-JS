import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ToDo from "./ToDo";

function ToDoList(props) {
    if(props.todos.length) {
        return (
            <Paper>
                <List>
                    {props.todos.map((todo, idx) => (
                        <React.Fragment key={todo.id.toString()}>
                            <ToDo 
                                {...todo}
                                removeToDo={props.removeToDo}
                                toggleCompletion={props.toggleCompletion}
                                editToDo={props.editToDo} />
                            {idx < props.todos.length - 1 && <Divider key={todo.id.toString()+'2'} />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        );
    }
    return null;
}

export default ToDoList;