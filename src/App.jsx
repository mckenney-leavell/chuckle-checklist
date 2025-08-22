import "./App.css"
import { useState, useEffect } from "react"
// import { getAllJokes } from "./services/jokeService.jsx";
import { handleAddJoke } from "./JokeButton.jsx";
import stevePic from "./assets/steve.png"


export const App = () => {
  const [allJokes, setAllJokes] = useState([]);
  const [jokeInput, setJokeInput] = useState("");

  // useEffect(() => {
  //   getAllJokes().then((jokesArray) => {
  //       setAllJokes(jokesArray);
  //       console.log("jokes set!")
  //   })
  // }, [])

  return (
  <div className="app-container">
    <header className="app-heading">
      <div className="app-heading-circle">
        <img className="app-logo" src={stevePic} alt="Good job Steve" />
      </div>
      <div className="app-heading">
        <h1 className="app-heading-text">Chuckle Checklist</h1>
      </div>
    </header>
    <h2>Add joke</h2>
    <div className="joke-add-form">
      <input
      className="joke-input"
      type="text"
      placeholder="New One Liner"
      value={jokeInput}
      onChange={(event) => {
        // What's the value of event?
        setJokeInput(event.target.value)
      }}
      />
      <button className="joke-input-submit" onClick={() => {
          handleAddJoke(jokeInput)
          setJokeInput("")
      }}>Add</button>
    </div>
  </div>)
}

