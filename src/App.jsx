import "./App.css"
import { useState, useEffect } from "react"
import { getAllJokes, setJokeText } from "./jokeService.jsx";

export const App = () => {
  const [allJokes, setAllJokes] = useState([]);
  const [jokeInput, setJokeInput] = useState("");

  useEffect(() => {
    getAllJokes().then((jokesArray) => {
        setAllJokes(jokesArray);
        console.log("jokes set!")
    })
  }, [])


  return (
  <div className="jokes-container">
    <h2>Hello World!</h2>
    <input
    className="input-box"
    type="text"
    placeholder="New One Liner"
    onChange={(event) => {
      // What's the value of event?
      setJokeInput(event.target.value)
    }}
    />
    <button className="joke-input-submit" onClick={() =>
        setJokeText(jokeInput)
    }>Add</button>
    </div>)
}

