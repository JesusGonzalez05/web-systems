//script page 

console.log("Hello!");

const message = document.querySelector("#confirmation-message");
//console.log(message)

const form = document.querySelector("#trip-form");

form.addEventListener("submit", function(event){

    event.preventDefault();
    message.textContent = "Get Ready!";
    console.log("Your form was submitted! :)");

});
