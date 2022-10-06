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


// Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use. For ideas, see this list of no-auth APIs. If you would like to use an API that requires a key, please consult with your instructor on how to protect that key. NEVER push your API key to github!
// You can use an external API and/or JSON server. With JSON server, you have control over the content and structure of the data. This video (https://youtu.be/lamIJhsDNIE)  goes over JSON Server
// Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.
// Do not rely on redirects and reloads to refresh data
// No document.reload or window.reload in your application
// Use at least 3 unique event-listeners that enable interactivity. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each listener should listen for a DIFFERENT TYPE OF EVENT. **YOU MUST USE addEventListener() to add your event**
// Unique event listeners with unique callbacks - Having 3 different callbacks for 3 different event listeners (3 click event listeners will only count as 1 distinct event listener. You would also need 2 others such as change, mouseover, keydown, etc)
// Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

