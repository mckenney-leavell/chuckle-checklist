export const transientState = {
    text: "",
    told: false
}

export const postJokes = async (jokeInput) => {
    if (jokeInput.length != 0) {
        transientState.text = jokeInput
        const postInput = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }
        const response = await fetch("http://localhost:8088/jokes", postInput)
    }
    console.log(transientState)
}