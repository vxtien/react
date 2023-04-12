const LightSwitch = () => {
    const handleClick = () => {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'pink') {
            bodyStyle.backgroundColor = 'white';
        } else {
            bodyStyle.backgroundColor = 'pink';
        }
    }
    return(
        <button onClick={handleClick}>
            Toggle the lights
        </button>
    );
}
export default LightSwitch;