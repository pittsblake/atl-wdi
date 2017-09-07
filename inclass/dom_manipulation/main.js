let number = 0;

const button = document.querySelector("button");
console.log(button);

const addOne = () => {
    number++;
    document.querySelector(".number").innerText = number;

}
button.addEventListener("click", addOne);




//var response = prompt("Hi! What's your favorite food?");

//var newElement = document.createElement("p");
//newElement.textContent = `I wish I liked ${response} too. Sometimes, it is sad to be a computer. :( `;
//document.body.appendChild(newElement);    

