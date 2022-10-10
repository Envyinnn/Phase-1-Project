
document.addEventListener("DOMContentLoaded", () => {
    fetchAnimals()

})

function fetchAnimals(){
 fetch ('http://localhost:3000/animals')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const animals = document.querySelector("#animal-list")
        animals.innerHTML = renderAllAnimals(data)
    })
}

function renderAllAnimals(animals){
   return animals.map(td => renderOneAnimal(td)).join("")
}

function renderOneAnimal(animals){
    return `
    <div class="animal-card" id ="${animals.id}">
        <div class="animal-frame">
            <center><h4 class = "center-text"><img src = ${animals.content} alt = "Failed to load" style = "width:500px;height:300px;"></h4><br></br></center>
        </div>
        <div id=animal-description>
        <p>
    </div>
    `
}



// you need to make fetch that pulls from db.json so that it shows up on page
//With JSON server, you have control over the content and structure of the data. This video (https://youtu.be/lamIJhsDNIE)  goes over JSON Server
// Do not rely on redirects and reloads to refresh data
// Use at least 3 unique event-listeners that enable interactivity. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each listener should listen for a DIFFERENT TYPE OF EVENT. **YOU MUST USE addEventListener() to add your event**
// Unique event listeners with unique callbacks - Having 3 different callbacks for 3 different event listeners (3 click event listeners will only count as 1 distinct event listener. You would also need 2 others such as change, mouseover, keydown, etc)
// Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.
