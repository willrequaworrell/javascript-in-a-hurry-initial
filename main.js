
// Toggle Menu Section

document.querySelector('#open-nav-menu').addEventListener("click", () => {
    document.querySelector("header nav .wrapper").classList.add("nav-open")
})

document.querySelector("button#close-nav-menu").addEventListener("click", () => {
    document.querySelector("header nav .wrapper").classList.remove("nav-open")
})


// Greeting Section 

const convertCelsiusToFahrenheit = (temp) => {
    return (temp * (9/5)) + 32
}

const convertFahrenheitToCelsius = (temp) => {
    return (temp - 32) * (5/9)
}

const greetingText = "Good Morning"
const weatherCondition = "sunny"
const userLocation = "New York"
let tempInCelsius = 25
let temp = tempInCelsius
let weatherTextCelsius = `The weather is ${weatherCondition} in ${userLocation} and it's ${temp.toFixed(1).toString()} degrees outside`
let weatherTextFahrenheit = `The weather is ${weatherCondition} in ${userLocation} and it's ${convertCelsiusToFahrenheit(temp).toFixed(1).toString()} degrees outside`

document.querySelector("#greeting").innerHTML = greetingText
document.querySelector("p#weather").innerHTML = weatherTextCelsius


// Temperature Toggle Section 
document.querySelector(".weather-group").addEventListener("click", (e) => {
    const clickedID = e.target.id
    if (clickedID === "fahr") {
        document.querySelector("p#weather").innerHTML = weatherTextFahrenheit
    } else if (clickedID === "celsius") {
        document.querySelector("p#weather").innerHTML = weatherTextCelsius
    }
})