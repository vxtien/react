const MyButton = () => {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>
            click me
        </button>
    )
}
export default MyButton;