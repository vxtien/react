import { useState } from "react";

function MyApp1() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return <>
    <MyButton1 count={count} onClick={handleClick}/>
    <MyButton1 count={count} onClick={handleClick}/>
  </>;
}
export default MyApp1;

function MyButton1(props) {
    console.log(props);
  return (
    <>
      <button onClick={props.onClick}>Click {props.count} times</button>
    </>
  );
}
