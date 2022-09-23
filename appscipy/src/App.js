import React from 'react';
import "./App.css";
import { useState, useEffect } from "react";
import MyButton from "./components/MyButton";
import ProfileCard from './components/ProfileCard';
import profiles from './mockDatabase';

function App() {
  const addButton = {
    fontSize: "40px"
  }
  // offline code
  const [count, setCount] = useState(0);
  // increment and decrement a state variable
  // what we put in the state variable is default. Here we are starting at 0

  const [fullgov, setFullGov] = useState('Awaiting fetched data...')

  // State API -- 
  // online code - async await with api request then storing into a state variable called "fullgov" that means 'full government name'. 
  const randomName = async () => {
    const response = await fetch('https://randomuser.me/api')
    // went to random user api and fetch data
    const data = await response.json()
    // turned into json format {}
   setFullGov(data.results[0].name.first + ' ' + data.results[0].name.last)
    // we get our result and shows first and last name
    return data.results[0].picture.large
  }

  useEffect(() => {
      randomName()
  }, [])
    // dependency of empty array. Basiclally allows function to run once infinite amount of times.
  return (
    <>
      <h1>UGLY SQUADRON: {count}</h1>
      <button style={addButton} onClick={() => setCount(count + 1)}>+</button>
      <button style={addButton} onClick={() => setCount(count - 1)}>-</button>
      <MyButton title='BUY🏆' color='green'/> 
      <MyButton title='Sell💰' color='red' />
      {profiles.map(profile => (
        <ProfileCard
          image={`https://robohash.org/${Math.random()}.png`}
          name={fullgov}
          title={profile.title}
          description={profile.description} />
      ))}

      {/* Set up our react js application from scratch and also, deleted unwanted files
      jsx practice and implementing variables and styles
      Whatever goes in curly braces { } is Javascript
      Styles is a attribute and could be used in javascript
      Created object to style. We used a key, value pairs!
      onClick method
      Added component
      rafce auto complete component. Add ES7 snippets in Visual Studio Code
      Always make sure components are imported into main App.js component
      Build your components - added props in Button component
      Some destructuring in button component
      Fake database - array to loop through profile
      Get a random user online and access their data */}

    </>
  );
}

export default App;
