import React,{ useState } from "react";

const styling={
    backgroundColor:"gray",
     textAlign:"left",
      margin:"20px",
    padding:"10px",
    fontSize:"30px",
    fontWeight:"bold",
    color:"white",
    borderRadius: "10px"
}
const input={
    fontSize:"18px",
    padding:"10px"

}

const Todo=()=>{
    const [task,settask] = useState("");
    const [todo, settodo] = useState([]);

    const handlech=(e)=>{
        // console.log(e)
            settask(e.target.value);
    }

    const handleClick =()=>{
        settodo([task,...todo])
    }

    return (
        <>
        <h1>Todo List</h1>
        <div >
        {todo.map((elem)=> <div style={styling}>{elem}</div>)}
        </div>
        <input type={"text"} value={task} style={input} placeholder="Enter Todo Here" onChange={handlech} />
        <button style={input} onClick={handleClick}>Add Todo</button>
        </>
    )
}

export default Todo