import { useState } from "react";
import Background from "./Background"
import Box from "./Box";

const initialPosition = {
    x: 0,
    y: 200
};

const Canvas = () => {
    const [shape, setShape] = useState({
        color: 'orange',
        position: initialPosition
    })

    const handleMove = (dx, dy) => {
        setShape({
            ...shape,
            position: {
                x: shape.position.x + dx,
                y: shape.position.y + dy,
            }
        })
    }

    const handleColorChange = (e) => {
        setShape({
            ...shape,
            color: e.target.value
        })
    }

    return(
        <>
            <select
                value={shape.color}
                onChange={handleColorChange}
            >
                <option>orange</option>
                <option>lightpink</option>
                <option>aliceblue</option>
            </select>

            <Background position={initialPosition}/>

            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag me!
            </Box>
        </>
    )
}

export default Canvas;