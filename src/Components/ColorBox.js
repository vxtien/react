import { useState } from "react";
import "../styles/color-box.css"

function ColorBox() {
    let [myColor, setMyColor] = useState("red");

    const onChangeColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        setMyColor(`rgb(${r}, ${g}, ${b})`)

        // setMyColor(randomColor());
    }

    return(
        <div className="mybox"
        onClick={onChangeColor}
        style={{
            backgroundColor: myColor
        }}
        >

        </div>
    )
}
export default ColorBox;