import { useState } from "react";
import { sculptureList } from "./data";
const Gallery = () => {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    let prev = index > 0;
    let next = index < sculptureList.length - 1;
    const handleNextClick = () => {
        if (next) {
            setIndex(index + 1);
        } else {
            setIndex(0)
        }
    }
    const handlePrevClick = () => {
        if (prev) {
            setIndex(index - 1);
        } else {
            setIndex(sculptureList.length - 1)
        }
    }
    const handleChange = () => {
        setShowMore(!showMore);
    }
    let sculpture = sculptureList[index]
    return(
        <>
            <button onClick={handlePrevClick}>Previous</button>
            <button onClick={handleNextClick}>
                Next
            </button>
            <h2>
                {sculpture.name} by {sculpture.artist}
            </h2>
            <h3>
                {index + 1} of {sculptureList.length}
            </h3>
            <button onClick={handleChange}>
                Show
            </button> <br/>
            {showMore && <p>{sculpture.description}</p>}
            <img 
                style={{width:200}}
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    )
}
export default Gallery;