// import { postJokes } from "./TransientState.jsx";

export const postJokes = async (jokeInput) => {
    if (jokeInput.length != 0) {
        // transientState.text = jokeInput
        const jokeData = {
            text: jokeInput,
            told: false
        }
        const postInput = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jokeData)
        }
        const response = await fetch("http://localhost:8088/jokes", postInput)    
    console.log(jokeData)
    }

}

export const handleAddJoke = async (jokeInput) => {
        const jokes = await postJokes(jokeInput)
        // const jsonString = JSON.stringify(jokes)
}