const AppToolBar = () => {

    return(
        <ToolBar
            onPlayMoive={()=> alert('Playing!')}
            onUpLoadImage={()=> alert('Uploading!')}
        />
    )
} 

export default AppToolBar;

const ToolBar = ({onPlayMoive, onUpLoadImage}) => {
    return(
        <>
            <Button onClick={onPlayMoive}>Play Moive</Button>
            <Button onClick={onUpLoadImage}>Upload Image</Button>
        </>
    )
}

const Button =({onClick, children}) => {
    return(
        <button onClick={onClick}>{children}</button>
    )
}