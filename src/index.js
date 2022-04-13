import generateJoke from "./generatejoke"
import "./styles/main.scss"
import laughing from "./assets/laughing.svg"
// import { nanoid } from "nanoid"

const laughImg = document.getElementById("laughImg")
laughImg.src = laughing

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// console.log(nanoid())

// document.querySelector('div.container').innerHTML += "<h1>Ready to update</h1>"
