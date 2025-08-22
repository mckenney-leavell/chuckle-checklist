import "./App.css"
import React from "react";
import { useState, useEffect } from "react"
import { getAllJokes } from "./services/jokeService.jsx";
import { handleAddJoke } from "./JokeButton.jsx";
  


export const App = () => {
  const [allJokes, setAllJokes] = useState([]);
  const [jokeInput, setJokeInput] = useState("");

  // useEffect(() => {
  //   getAllJokes().then((jokesArray) => {
  //       setAllJokes(jokesArray);
  //       console.log("jokes set!")
  //   })
  // }, [])

//   useEffect (() => {
//     if (jokeInput.length != 0) {
//       const postJoke = {
//         method: "POST",
//         headers: {
//                   "Content-Type": "application/json"
//               },
//         body: JSON.stringify(setJokeInput(jokeInput))
//       }
//       fetch("http://localhost:8088/jokes", postJoke)
//     }
// }, [jokeInput])



  return (
  <div className="jokes-container">
    <h2>Hello World!</h2>
    <input
    className="input-box"
    type="text"
    placeholder="New One Liner"
    // value={transientState.text}
    onChange={(event) => {
      // What's the value of event?
      setJokeInput(event.target.value)
    }}
    />
    <button className="add-joke" onClick={() =>
        handleAddJoke(jokeInput)
    }>Add</button>
    </div>)
}

