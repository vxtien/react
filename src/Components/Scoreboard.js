import { useState } from "react"

const Scoreboard = () => {
    const [player, setPlayer] = useState({
        firstName: 'Ran',
        lastName: 'She',
        score: 10,
    })

    const handleChangeFistName = (e) => {
        setPlayer({
            ...player,
            firstName: e.target.value})
    }

    const handleChangeLastName = (e) => {
        setPlayer({
            ...player,
            lastName: e.target.value
        })
    }

    const handleClickPlusScore = () => {
        setPlayer({
            ...player,
            score: player.score + 1
        })
    }

    return(
        <>
            <label>
                Score: {player.score}
                <button onClick={handleClickPlusScore}>+1</button>
            </label>
            <label>
                First name:
                <input value={player.firstName} onChange={handleChangeFistName}/>
            </label>
            <label>
                Last name:
                <input value={player.lastName} onChange={handleChangeLastName}/>
            </label>
        </>
    )
}
export default Scoreboard;