

// Creating a div element
var divElement = document.createElement("Div");
divElement.id = "divID";
divElement.className = "dynamicCard";
divElement.innerHTML = "Here's the crap you entered...";

// Adding a paragraph to it
var paragraph = document.createElement("P");
var text = document.createTextNode("this is where the user input will be displayed");
paragraph.appendChild(text);
divElement.appendChild(paragraph);

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
