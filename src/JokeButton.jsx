import { postJokes } from "./TransientState.jsx";

export const handleAddJoke = async (jokeInput) => {
        const jokes = await postJokes(jokeInput)
        // const jsonString = JSON.stringify(jokes)
}