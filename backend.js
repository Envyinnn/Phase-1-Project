// Database Link
const baseLink = 'http://localhost:3000/animals'
const main = document.getElementById('main')
const addAnimal = document.getElementById('submitter')

// Event Listeners

addAnimal.addEventListener('click',fetchAnimals)

function fetchAnimals() {
    fetch (baseLink)
    .then (res => res.json)
}
