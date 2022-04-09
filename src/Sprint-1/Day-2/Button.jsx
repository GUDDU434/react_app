import { useState } from "react"

const div_style={
    width:"fit-content",
    padding:"10px",
    border:"solid black 1px",
    margin:"auto"
}
const pad={
    padding:"10px",
    fontSize:"15px"

}

const Button=()=>{
    const [count,setCount] = useState(0)
    const handleadd =(value)=>{
        setCount(count+value)
    }
    const handledec =()=>{
        if(count>0){
            setCount(count-1)
        } 
    }
    const handledouble=()=>{
        setCount(count*2);
    }

return <>
<div style={div_style}>
<h1 style={{textAlign:"center",  backgroundColor:"green" }}>Increase, Decrease And Double</h1>
<h1 style={{textAlign:"center"}}>{count}</h1>
<div style={{display:"flex", justifyContent:"space-evenly"}}>
<button style={{backgroundColor:"yellow", pad}} onClick={()=>handleadd(1)}>Increase</button>
<button style={{backgroundColor:"red", color:"white"}} onClick={()=>handledec(-1)}>Decrease</button>
<button style={{backgroundColor:"blue", color:"white"}} onClick={()=>handledouble()}>Double</button>
</div>

</div>


</>
}

export default Button;