import { useState } from "react";
const ExampleState = () => {
    const [currentNumber, setCurrentNumber] = useState(0);
    const checkNumber = (number) => {
        return number % 2 === 0;
    }
    const increment = () => {
        setCurrentNumber(currentNumber + 1)
    }
    return(
        <>
            <h1>{currentNumber} This is {checkNumber(currentNumber) ? "even number" : "odd number"}</h1>
            <button onClick={increment}>+</button>
        </>
    )
}
export default ExampleState;