import Card from "./Card"
const data = {
name:"Guddu Ali",
qualification:"Devloper",
city:"Mumbai",
image:"https://ca.slack-edge.com/T02QFJUB5DF-U02QZTDT8T0-fb0bb0ac7cda-512"

}
const data2 = {
    name:"Chand",
    qualification:"Devloper",
    city:"Mumbai",
    image:"https://ca.slack-edge.com/T02QFJUB5DF-U02R8TPTW21-7ede83ef692e-512"
    
    }


const Employee=()=>{
    return (
        <>
        <Card {...data}/>
        <Card {...data2} />
        </>
        // display the card
    )
}

export default Employee