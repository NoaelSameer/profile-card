import {useState} from "react"
const Button = ({count, onClick}) => {
    // const [count, setCount] = useState(0)
  return (
    <button onClick={onClick}>Clicked {count} times</button>
    )
}

export default Button