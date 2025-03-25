const container = document.querySelector("#container");

// Create a new div element with the class "content"
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

// add a p tag with "Hey I'm red!" to the content div

const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!";
content.appendChild(redParagraph);

// add an h3 tag with "I'm a blue h3!" to the content div

const blueHeading = document.createElement("h3");
blueHeading.style.color = "blue";
blueHeading.textContent = "I'm a blue h3!";
content.appendChild(blueHeading);

//add a div with a black border and pink background to the content div

const newDiv = document.createElement("div");
newDiv.style.border = "black solid 2px";
newDiv.style.backgroundColor = "pink";

// add an h1 tag with "I'm in a div" to the new div
const divHeading = document.createElement("h1");
divHeading.textContent = "I'm in a div";
newDiv.appendChild(divHeading);

// add a p tag with "ME TOO!" to the new div
const divParagraph = document.createElement("p");
divParagraph.textContent = "ME TOO!";
newDiv.appendChild(divParagraph);

content.appendChild(newDiv);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    alert("Hello World!");
}
);

