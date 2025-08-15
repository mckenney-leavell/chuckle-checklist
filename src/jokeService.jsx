import React from "react"

export const getAllJokes = () => {
    return fetch("http://localhost:8088/jokes").then(res => res.json())
}

const transientState = {
    text: "",
    told: false
}

export const setJokeText = (input) => {
    transientState.text = input
    console.log(input)
}

export const postJokes = () => {
    return fetch("http://localhost:8088/jokes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(transientState)
    })
}
