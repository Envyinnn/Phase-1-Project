let animalList = [] 
const animals = document.querySelector("#animal-list")
const renderOneAnimal = (animal) => {
    return `
    (<div class="animal-card" id ="${animal.id}">
        <div class="animal-frame">
            <center><h2> ${animal.title}</h2>
            <center><h4 class = "center-text"><img src = ${animal.content} alt = "Failed to load" style = "width:500px;height:300px;"></h4><br></br></center>
            <center><h3> ${animal.details}</h3>
        </div>
        <div id=animal-description>
    </div>)
    `
}
const renderAllAnimals = (animals) => {animals.map(td => renderOneAnimal(td)).join("")}

document.addEventListener("DOMContentLoaded", () => {
    fetchAnimals()

})
// Listener
document.querySelector('#submitter').addEventListener('submit', handleSubmit);
preventDefault();

// mouse over h1 will change color to orange
const colorSwap = document.querySelector('h1');
    colorSwap.addEventListener('mouseover', function handleMouseOver() {
        colorSwap.style.color = 'orange';
    });


let form = document.getElementById("post")
form.addEventListener("submit", function(e){
    e.preventDefault();
});

var randomInteger = function (pow) {
    return Math.floor(Math.random() * pow);
};


function actualSubmit() {
    let form = document.querySelector('#post');
    let data = new FormData(form);
    let details = "Your description!"
    let animal_dict = {}
    let rand10000 = randomInteger(10000);
    for(let [theKey, theValue] of data) {
        animal_dict[theKey] = theValue;
        console.log(theKey);
        console.log(theValue);
        preventDefault();
        
    }
    animal_dict["id"] = rand10000
    animal_dict["details"] = details
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/animals", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(animal_dict));
   
    
}

function handleSubmit (e){

    e.preventDefault()
    let animalType = {
        title:e.target.title.value,
        content:e.target.content.value,
    }
   
    addingAnimal(animalType)
}

// Fetch Request
function fetchAnimals(){
 fetch ('http://localhost:3000/animals')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        animalList = data
        console.log("animalList",animalList)
        let  i = 0;
        while (i < animalList.length) {
        console.log(animalList[i]);
        let ani = animalList[i];
        document.getElementById("animal-list").innerHTML = document.getElementById("animal-list").innerHTML + renderOneAnimal(ani)
        i++;
        }
    let newDiv = animalList.forEach(renderOneAnimal);    
    })
}

function addingAnimal(animalType){
    console.log("--- ANIMAL TYPE ----")
    console.log(JSON.stringify(animalType))
    console.log("--------------------")
    fetch('http://localhost:3000/animals', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept" : 'application/json',
        },
        body:JSON.stringify(animalType)
    })
    .then(res => res.json())
    .then(animals => {
        console.log(animals)   
    })
}

document.getElementById("darkmode").addEventListener('click', function(){
    const css = document.getElementById("dark");
    const darkModeButton = document.getElementById("darkmode");

    if (darkModeButton.innerHTML == 'Dark Mode') {
        css.setAttribute('href', 'lightmode.css');
        darkModeButton.innerHTML = 'Light Mode';
    }
    else {
        css.setAttribute('href', 'nightmode.css');
        darkModeButton.innerHTML = 'Dark Mode';
    }
});



