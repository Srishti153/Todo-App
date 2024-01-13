import React, {useState} from "react";

export const TodoForm = ({addTodo})=> {
    const [value, setValue] = useState("")
    const handleSubmit =(e)=>{
        e.preventDefault()
        //console.log(value)
        if(!value){
            alert("Task cannot be empty")
        }
        else{
            addTodo(value)
            setValue("")
        }
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="What is the task for today?" 
            value={value}
            onChange={(e)=>{setValue(e.target.value)}}/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}