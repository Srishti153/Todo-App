import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Todo = ({task, toggleAsComplete, deleteTodo, editTodo})=> {
    return(
        <div className="Todo">
            <p onClick={()=> toggleAsComplete(task.id)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
            <div>
            <FontAwesomeIcon onClick={()=>editTodo(task.id)} icon={faPenToSquare}/>
            <FontAwesomeIcon onClick={()=>deleteTodo(task.id)} icon={faTrash}/>
            </div>
        </div>
    )
}