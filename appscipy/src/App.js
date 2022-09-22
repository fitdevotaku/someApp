import "./App.css";
import React, { useState } from "react";

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

  return (
    <div>
      <h1>My count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
      <button onClick={() => setCount(count - 1)}>Minus Count</button>
      <p style={mystyle}>{message}</p>
      {/* // We set up our react js application from scratch and also, deleted */}
      {/* unwanted files // jsx practice and implementing variables and styles // */}
      {/* whatever goes in curly braces {} is Javascript // styles is a attribute */}
      {/* and could be used in javascript // we created object to style. We used a */}
      {/* key, value pairs!!! */}
    </div>
  );
}

export default App;
