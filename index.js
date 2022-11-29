// Write your code here!
//Removing the main element 
const main = document.querySelector('main#main')
main.remove()
//Create a h1 element using using document.createElement()
let newHeader = document.createElement("h1")
//assigning the h1 element an id atrribute of victory
newHeader.setAttribute("id","victory")
//inserting a message to the h1 element using .innerHTML
newHeader.innerHTML = `<h1>Muthaiga is the champion</h1>`