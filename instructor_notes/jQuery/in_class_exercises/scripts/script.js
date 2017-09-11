// 1. Use jQuery to fetch all `h1` tags and save them to a variable called $h1
const $h1 = $("h1");
console.log($h1);
$h1.css("textDecoration", "underline");
// 2. Grab the HTML element that is both an H1 and has an ID of "second"
const $second = $("h1#second");
console.log($second);
// 3. Select the div with an ID of 'myDiv' and change the text to say "jQuery makes JS easy!"
$("#myDiv").html("jQuery makes this easy <h1> Hello </h1>");
// 4. Append this image to end of the body. http://www.fillmurray.com/200/200

const $bill = $("<img src ='http://www.fillmurray.com/200/200'>").hide();
$("body").append($bill)
$bill.fadeIn(2000)

console.log($bill);

// 5. Change the background color of the page to green.
$("body").css({
    background: "lightBlue",
    fontSize: "20px",
});
// 6. Remove the div with and ID of 'myDiv'
//$("#myDiv").remove();

$('form').on("submit", funciton(event){
    event.preventDefault();
})