import { useState } from "react";

function BaiHocVeState() {
    // render 1 element or 1 component theo 1 dieu kien
    const [currentNumber, setCurrentNumber] = useState(0);

    function kiemTraSoChan(number) {
        return number % 2 === 0;
    }

    const congLen_1 = () => {
        setCurrentNumber(currentNumber + 1)
        console.log(currentNumber);
    }

    return(
        <>
            <h1>{currentNumber} Đây là {kiemTraSoChan(currentNumber) ? "số chẵn" : "số lẻ"}</h1>
            <button onClick={congLen_1}>Tăng</button>
        </>
    )
}

export default BaiHocVeState;