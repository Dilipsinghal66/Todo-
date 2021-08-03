import React, { useState } from 'react';

export const Addtodo = ({addtodo}) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");


    const submit =(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }
        else{
         addtodo(title,desc);
       settitle("");
       setdesc("");
        }
    }
    
  return (
    <div  className="container my-3" >
        <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div classNameName="mb-3">
          <label htmlfor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="title"
            value ={title}
            onChange ={(e)=>{settitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        
        </div>
        <div className="mb-3">
          <label htmlfor="desc" className="form-label">
            Todo description
          </label>
          <input
            type="text"
            value ={desc}
            onChange ={(e)=>{setdesc(e.target.value)}}
            className="form-control"
            id="desc"
          />
        </div>
       
        <button type="submit" className="btn btn-success">
          Add Todo
        </button>
      </form>
    </div>
    
  );
};
