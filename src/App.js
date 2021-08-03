import "./App.css";
import  Header  from "./mycomponents/Header";
import {Addtodo} from "./mycomponents/Addtodo";
import {Todos} from "./mycomponents/Todos";
import {Footer} from "./mycomponents/Footer";

import React, { useState, useEffect } from 'react';

function App() {
  let inittodo;
  if(localStorage.getItem("todos")===null){
  inittodo=[];
  }
  else{
    inittodo =JSON.parse(localStorage.getItem("todos"));
  }
  const ondelete=(todo) => {
        console.log("I am delete todo" , todo);
        settodos(todos.filter((e)=>{
          return e!==todo;
        }));
        localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addtodo =(title,desc) =>{
    console.log("I am adding a todo",title,desc)
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno +1;
    }
   
     const mytodo ={
       sno : sno,
       title : title,
       desc : desc,
     }
     settodos([...todos,mytodo]);
     console.log(mytodo);
 
   
    
     
  }
  const [todos, settodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
   }, [todos])


  return (
    <>
   
     <Header title ="My todosList" search ={false}/>
       <Addtodo addtodo={addtodo}/>
     <Todos todos ={todos} ondelete ={ondelete}/>
    <Footer/>

    </>
  );
}

export default App;
