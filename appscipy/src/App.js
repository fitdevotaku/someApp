import React from 'react';
import "./App.css";
import { useState } from "react";
import MyButton from "./components/MyButton";
import ProfileCard from './components/ProfileCard';

function App() {
  const addButton = {
    fontSize: "40px"
  }

  const [count, setCount] = useState(0);
  // increment and decrement a state variable
  // what we put in the state variable is default. Here we are starting at 0

  return (
    <>
      <h1>KAWS SQUADRON {count}</h1>
      <button style={addButton} onClick={() => setCount(count + 1)}>+</button>
      <button style={addButton} onClick={() => setCount(count - 1)}>-</button>
      <MyButton title='BUY🏆' color='green'/> 
      <MyButton title='Sell💰' color='red' />
      <ProfileCard title="KawZie NoZi" tagline="Founder & CEO" description="Description: I am a huge KAWS collector 🚀. I am also a developer 💻."/>
      <ProfileCard title="John Doe" tagline="Co-Founder & Chief Evangelist" description="I am a designer and part-time head honcho 🧑‍🚀." />

      {/* // We set up our react js application from scratch and also, deleted */}
      {/* unwanted files // jsx practice and implementing variables and styles // */}
      {/* whatever goes in curly braces {} is Javascript // styles is a attribute */}
      {/* and could be used in javascript // we created object to style. We used a */}
      {/* key, value pairs! */}
      {/* onClick method */}
      {/* added component */}
      {/* rafce auto complete component. Add ES7 snippets in Visual Studio Code */}
      {/* Always make sure components are imported into main App.js component */}
      {/* build your componeny - added props in Button component */}
      {/* some destructuring in button component */}
    </>
  );
}

export default App;
