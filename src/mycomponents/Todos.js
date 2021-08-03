import React from 'react'
import {Todo} from "../mycomponents/Todo";

export const Todos = (props) => {
    let mystyle ={
        minHeight :"70vh"
    }
    return (
        <div className="container my-3" style={mystyle}>
            <h3 className=" my-3">Todos List</h3>
            {props.todos.length ===0? "No Todos to display":
            props.todos.map((todo)=>{
                return (
                <>
                 <Todo todo ={todo} key={todo.sno} ondelete = {props.ondelete}/>
                  <hr/>
                  </>
            )
            })
        }
             
        </div>
    )
}
