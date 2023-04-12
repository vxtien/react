import { useState } from "react";
const RequestTracker = () => {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);
    function delay(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        });
    }
    async function handleClick() {
        setPending(p => p + 1);
        await delay(2000);
        setPending(p => p - 1)
        setCompleted(c => c + 1)
    }
    return(
        <>
            <h3>Pedding: {pending}</h3>
            <h3>Completed: {completed}</h3>
            <button onClick={handleClick}>Buy</button>
        </>
    )
}
export default RequestTracker;

