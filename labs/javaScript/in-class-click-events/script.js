window.onload = function () {

    const click = document.querySelector(".click");

    click.addEventListener("click", function (event) {
        alert("you have clicked button one");
    });


    //grab button
    const par = document.querySelector(".par");
    //make event for button when clicked
    par.addEventListener("click", function (event) {
        //create a string
        const str = "A click event is essentially tying a function (as a callback) to an element and specifying what action needs to happen to trigger or call/invoke that function (callback).";
       //grab the div element
        const div = document.querySelector("div");
        //create p tag 
        const p = document.createElement('p');
        //put p tag inside div tag & attach string to p tag.
        div.appendChild(p).innerHTML = str;
    });

    //Grab 3rd button
    const rmv = document.querySelector(".remove");
    //add a click event on button
    rmv.addEventListener("click", function(event){
        //add remove button function
        rmv.remove();
    });


}
