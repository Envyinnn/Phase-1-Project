// Database Link
const baseLink = 'http://localhost:3000/animals'
const main = document.getElementById('main')

// Page Load
document.addEventListener('DOMContentLoaded', () => {
    return;
})
    function pageReload(){
        main.innerHTML = ''
    }
fetch('http://localhost:3000/animals')    
    .then(res => console.log(res));

