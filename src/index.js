console.log('%c HI', 'color: firebrick')

let imgParent = document.querySelector("div#dog-image-container")
let breedParent = document.querySelector("ul#dog-breeds")
let breedFilter = document.querySelector('select#breed-dropdown')

// challenge one

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    .then((imgObject) => {
        renderImages(imgObject.message)
    })

function renderImages(imgArray) {
    imgArray.forEach((e) => {
        let img = document.createElement('img')
        img.src = e
        imgParent.append(img)
    })
}

// challenge two 

fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => res.json())
    .then((breedObject) => {
        renderBreeds(breedObject.message)
    })

function renderBreeds(breedObject) {
    Object.keys(breedObject).forEach((breed) => {
        if (breedFilter.value === breed.charAt(0)) {
            breedObject[breed].forEach((subBreed) => {
                    let li = document.createElement('li')
                    li.textContent = subBreed + ' ' + breed
                    li.class = breed
                    breedParent.append(li)
            })
        }
    })
}

// callenge three

breedParent.addEventListener('click', function(event){
    let li = event.target
    if (li.style.color === 'black') {
        li.style.color = 'green'
    } else {
        li.style.color = 'black'
    }
})

// challenge four 

breedFilter.addEventListener('change', function(event) {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((res) => res.json())
    .then((breedObject) => {
        renderBreeds(breedObject.message)
    })
})