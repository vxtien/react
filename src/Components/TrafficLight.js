import { useState } from "react"
const TrafficLight = () => {
    const [walk, setWalk] = useState(true);
    const handleClick = () => {
        setWalk(!walk);
        alert(walk ? 'stop is next' : 'step is next')
    }
    return(
        <>
            <button onClick={handleClick}> 
                Change to {walk? 'stop' : 'walk'}
            </button>
            <h1 style={{color: walk ? 'darkgreen' : 'darkred'}}>
                {walk ? 'walk' : 'stop'}
            </h1>
        </>
    )
}
export default TrafficLight;
