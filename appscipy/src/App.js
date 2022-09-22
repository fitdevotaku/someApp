import React from 'react';
import "./App.css";
import { useState } from "react";
import MyButton from "./MyButton";

function App() {
  const mystyle = {
    color: "white",
    fontSize: "20px",
    fontFamily: "arial",
  };

  const nameBucket = "Scipio";
  const myAge = 28;
  const message =
    "My name is " + nameBucket + " and I am " + myAge + " years young.";
  // console.log(message);

  const [count, setCount] = useState(0);
  // increment and decrement a state variable
  // what we put in the state variable is default. Here we are starting at 0

  return (
    <>
      <h1>My count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <MyButton/>
      <p style={mystyle}>{message}</p>
      {/* // We set up our react js application from scratch and also, deleted */}
      {/* unwanted files // jsx practice and implementing variables and styles // */}
      {/* whatever goes in curly braces {} is Javascript // styles is a attribute */}
      {/* and could be used in javascript // we created object to style. We used a */}
      {/* key, value pairs! */}
      {/* onClick method */}
      {/* added component */}
    </>
  );
}

export default App;
