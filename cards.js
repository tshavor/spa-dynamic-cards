



// this function creates the dynamic card once the create button is clicked
function createCard () {
	// this is a variable created to capture the text input by user:  ID targets the input button.
var example= document.getElementById("text").value;
console.log (example);

// CREATING THE dynamicCard:
// Creating a div element
var divElement = document.createElement("Div");
divElement.id = "divID";
divElement.className = "dynamicCard";
divElement.innerHTML = example;

// Adding a paragraph to it
// var paragraph = document.createElement("p");
// var text = document.createTextNode("this is where the user input will be displayed");
// paragraph.appendChild(text);
// divElement.appendChild(paragraph);

// Adding a button, cause why not!
var button = document.createElement("Button");
var textForButton = document.createTextNode("Delete");
button.appendChild(textForButton);
button.addEventListener("click", function(){
    alert("Hi!");
});
divElement.appendChild(button);

// Appending the div element to body
document.getElementsByTagName("body")[0].appendChild(divElement);
}

// ADDING EVENT LISTENER TO CREATE BUTTON 
document.getElementById("userInput").addEventListener("click", createCard)
// document.getElementById("userInput").addEventListener("click", function(event){
// console.log ("event", event.target.innerHTML);

// })