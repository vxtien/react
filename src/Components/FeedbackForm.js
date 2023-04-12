import { useState } from "react";
const FeedbackForm = () => {
  const [isSent, setIsSent] = useState(false);
  const [message, setMassage] = useState("");
  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Sending: ${message}`);
            setIsSent(true);
          }}
        >
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMassage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
        <FeedbackForm2 />
      </>
    );
  }
};
export default FeedbackForm;

const FeedbackForm2 = () => {
  const handleClick = () => {
    const name = prompt("What is your name?");
    alert(`Hello, ${name}!`);
  };
  return <button onClick={handleClick}>Greet</button>;
};
