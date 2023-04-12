import { useState } from "react";
const MyApp1=()=>{
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return <>
    <MyButton1 count={count} onClick={handleClick}/>
    <MyButton1 count={count} onClick={handleClick}/>
  </>;
}
export default MyApp1;
const MyButton1=(props)=>{
  return (
    <>
      <button onClick={props.onClick}>Click {props.count} times</button>
    </>
  );
}
