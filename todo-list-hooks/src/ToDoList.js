import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ToDo from "./ToDo";

function ToDoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map((todo, idx) => (
                    <>
                        <ToDo 
                            key={todo.id}
                            id={todo.id}
                            task={todo.task} 
                            completed={todo.completed}
                            removeToDo={props.removeToDo}
                            toggleCompletion={props.toggleCompletion}
                            editToDo={props.editToDo} />
                        {idx < props.todos.length - 1 && <Divider key={todo.id.toString()+'2'} />}
                    </>
                ))}
            </List>
        </Paper>
    )
}

export default ToDoList;