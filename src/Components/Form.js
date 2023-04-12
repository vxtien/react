import { useState } from "react"
const Form = () => {
    const [to, setTo] = useState('Ali');
    const [message, setMessage] = useState('Hi');
    const handleSubmit = (e) => {
        e.preventdefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`)
        }, 1000);
    }
    return(
        <form>
            <label onSubmit={handleSubmit}>
                To:{' '}
                <select
                    value={to}
                    onChange={e => setTo(e.target.value)}
                >
                    <option value="Ali">Ali</option>
                    <option value="Bob">Bob</option>
                </select>
            </label>
            <br/>
            <textarea
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
            <button type="submit">Send</button>
        </form>
    )
}
export default Form;