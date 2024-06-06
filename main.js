
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

// Clock Section 

setInterval( () => {
    let localTime = new Date()
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, "0")
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0")
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0")
}, 1000)


// Image Gallery Section 

const images = [
    {
        src: "./assets/gallery/image1.jpg" ,
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    },
    
]
 
// <img src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1" data-array-index="0" data-selected="true">

let mainImage = document.querySelector("#gallery > img")
let thumbnailsContainer = document.querySelector("#gallery > .thumbnails")
mainImage.src = images[0].src
mainImage.alt = images[0].alt

images.forEach((image, i) => {
    let thumbnail = document.createElement("img")
    thumbnail.src = image.src
    thumbnail.alt = image.alt
    thumbnail.dataset.arrayIndex = i
    thumbnail.dataset.selected = i === 0 ? true : false

    thumbnail.addEventListener("click", (e) => {
        let selectedIndex = e.target.dataset.arrayIndex
        let selectedImage = images[selectedIndex]
        mainImage.src = selectedImage.src
        mainImage.alt = selectedImage.alt

        thumbnailsContainer.querySelectorAll("img").forEach((img) => [
            img.dataset.selected = false
        ])

        e.target.dataset.selected = true
    })

    thumbnailsContainer.appendChild(thumbnail)
} )
