
// Toggle Menu Section

document.querySelector('#open-nav-menu').addEventListener("click", () => {
    document.querySelector("header nav .wrapper").classList.add("nav-open")
})

document.querySelector("button#close-nav-menu").addEventListener("click", () => {
    document.querySelector("header nav .wrapper").classList.remove("nav-open")
})


// Greeting Section 

const greetingText = "Good Morning"
const weatherCondition = "sunny"
const userLocation = "New York"
let temp = 22.8673
let weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temp.toFixed(1).toString()} degrees outside`

document.querySelector("#greeting").innerHTML = greetingText
document.querySelector("p#weather").innerHTML = weatherText