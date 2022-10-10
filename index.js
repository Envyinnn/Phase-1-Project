// Listener
document.querySelector('#submitter').addEventListener('submit', handleSubmit);

// Submit Handler
function handleSubmit (e){
    e.preventDefault()
    let animalType = {
        title:e.target.title.value,
        content:e.target.content.value,
        details:e.target.details.value,
    }
    renderOneAnimal(animalType)
    addingAnimal(animalType)
}


document.addEventListener("DOMContentLoaded", () => {
    fetchAnimals()

})




// Fetch Request
function fetchAnimals(){
 fetch ('http://localhost:3000/animals')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const animals = document.querySelector("#animal-list")
        animals.innerHTML = renderAllAnimals(data)
    })
}
function addingAnimal(animalType){
    
    fetch('http://localhost:3000/animals', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body:JSON.stringify(animalType)
    })
    .then(res => res.json())
    .then(animals => console.log(animals))
}

function renderAllAnimals(animals){
   return animals.map(td => renderOneAnimal(td)).join("")
}


// Animal List

function renderOneAnimal(animals){
    return `
    <div class="animal-card" id ="${animals.id}">
        <div class="animal-frame">
            <center><h2> ${animals.title}</h2>
            <center><h4 class = "center-text"><img src = ${animals.content} alt = "Failed to load" style = "width:500px;height:300px;"></h4><br></br></center>
            <center><h3> ${animals.details}</h3>
        </div>
        <div id=animal-description>
    </div>
    `
}






// Unique event listeners with unique callbacks - Having 3 different callbacks for 3 different event listeners (3 click event listeners will only count as 1 distinct event listener. You would also need 2 others such as change, mouseover, keydown, etc)
// Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.