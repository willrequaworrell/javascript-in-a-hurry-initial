
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

const products = [
    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }
]

const convertCelsiusToFahrenheit = (temp) => {
    return (temp * (9/5)) + 32
}

const convertFahrenheitToCelsius = (temp) => {
    return (temp - 32) * (5/9)
}

// Toggle Menu Section

const menuHandler = () => {
    document.querySelector('#open-nav-menu').addEventListener("click", () => {
        document.querySelector("header nav .wrapper").classList.add("nav-open")
    })
    
    document.querySelector("button#close-nav-menu").addEventListener("click", () => {
        document.querySelector("header nav .wrapper").classList.remove("nav-open")
    })

}

const greetingHandler = () => {
    const currentHour = new Date().getHours()
    console.log(currentHour)
    let greetingText = "Good"
    if (currentHour < 12) {
        greetingText += " Morning"
    } else if (currentHour < 17) {
        greetingText += " Afternoon"
    } else if (currentHour < 24) {
        greetingText += " Evening"
    } else {
        greetingText = "Welcome"
    }

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
}

const clockHandler = () => {
    setInterval( () => {
        let localTime = new Date()
        document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, "0")
        document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0")
        document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0")
    }, 1000)
}


const galleryHandler = () => {
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
}


const populateProducts = (productList) => {
    const productsContainer = document.querySelector("div.products-area")
    productsContainer.textContent = ""

    productList.forEach( (product, i) => {
        // outer div
        const productDiv = document.createElement("div")
        productDiv.classList.add("product-item")
        productsContainer.appendChild(productDiv)

        // image 
        const productImage = document.createElement("img")
        productImage.src = product.image
        productImage.alt = "Image for " + product.title
        productDiv.appendChild(productImage)

        // details
        const productDetailsDiv = document.createElement("div")
        productDetailsDiv.classList.add("product-details")
        productDiv.appendChild(productDetailsDiv)

        const productH3 = document.createElement("h3")
        productH3.classList.add("product-title")
        productH3.textContent = product.title
        productDetailsDiv.appendChild(productH3)

        const author = document.createElement("p")
        author.classList.add("product-author")
        author.textContent = product.author
        productDetailsDiv.appendChild(author)

        const priceTitle = document.createElement("p")
        priceTitle.classList.add("price-title")
        priceTitle.textContent = "Price"
        productDetailsDiv.appendChild(priceTitle)

        const price = document.createElement("p")
        price.classList.add("product-price")
        price.textContent = product.price == 0 ? "Free": "$" + parseFloat(product.price).toFixed(2)
        productDetailsDiv.appendChild(price)
        
       
    })
}

const productsHandler = () => {
    let freeProducts = products.filter((p) => !p.price || p.price == 0)
    let paidProducts = products.filter((p) => p.price > 0)
    
    populateProducts(products)
    
    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length

    const productsFilter = document.querySelector(".products-filter")
    productsFilter.addEventListener("click", (e) => {
        if (e.target.id === "all") {
            populateProducts(products)
        } else if (e.target.id === "paid") {
            populateProducts(paidProducts)
        } else if (e.target.id === "free" ) {
            populateProducts(freeProducts)
        }
    })
}


const footerHandler = () => {
    const currentYear = new Date().getFullYear()
    document.querySelector("footer").textContent = `© Will Worrell ${currentYear} - All rights reserved`
}


// Page Load 

menuHandler()
greetingHandler()
clockHandler() 
galleryHandler()
productsHandler()
footerHandler()