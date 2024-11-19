
import {useState} from "react"
import { PiAcorn } from "react-icons/pi";
import {default as Topics} from "../components/Question";
import Button from "../components/Button";
function Test(){
    let info = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda culpa soluta consequuntur sapiente fugit temporibus quisquam consectetur atque, sint tenetur.";
    // const sports = "Ella";

    let triggered = [12,3,54] 
    const [count, setCount] = useState(0)
    const handleClick = () =>{
        setCount(count + 1)
    }


    return(
    <>
    <Button count={count} onClick={handleClick}/>
    <Button count={count} onClick={handleClick}/>
        <h1>knoll smeer</h1>
        <p>Hello, my aspirations are becoming Oliver Andrew Kuopus's brother in law.</p>
        {/* <h3>{sports}</h3> */}
        <Topics title="Murders only happen in the building" info={info}/>
        {/* <button><PiAcorn size="500px" style={{backgroundColor:"yellow"}}/></button> */}

        {
            triggered.length > 0 ? <h1>Hello Data</h1>: <h1>Nothing Found</h1>
        }
        <Button />
        
    </>
    )
}

export default Test;

