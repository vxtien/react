import { useState } from "react"
const Form2 = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const handleChangeFistName = (e) => {
        setFirstName(e.target.value);
    }
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleChangeReset = () => {
        setFirstName('');
        setLastName('')
    }
    return(
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleChangeFistName}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleChangeLastName}
            />
            <h1>Hi, {firstName} {lastName}</h1>
            <button onClick={handleChangeReset}>Reset</button>
        </form>
    )
}
export default Form2;