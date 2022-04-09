
import styles from "./Card.module.css"

const right_style={
    fontSize:"40px",
    color:"red"
}
const right_styling2 ={
    fontSize:"30px",
    backgroundColor:"yellow"
}

const Card =(props)=>{
    const {name,city,qualification,image}=props
    return (
        <>
        <div className={styles.card}>
        <div className={styles.left_side}>
            <img src={image} alt={name}/>
        </div>
        <div className="right_side">
            <h1 style={{...right_styling2,...right_style}}>{name}</h1>
            <h1 style={right_styling2}>{qualification}</h1>
            <p>{city}</p>
        </div>

        </div>
       
        </>
    )
}

export default Card