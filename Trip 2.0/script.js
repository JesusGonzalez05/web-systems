//script page 

console.log("Hello!");


//console.log(message)

const form = document.querySelector("#trip-form");

const nameInput= document.querySelector("#guest-name");
const message = document.querySelector("#confirmation-message");

form.addEventListener("submit", function(event){

    event.preventDefault();
    const name = nameInput.value;

    message.textContent = "Get Ready!" + name + "New York here we come!";
    console.log("Your form was submitted! :)");

});

let likes = 0;

document.querySelector("#like-button").addEventListener("click", function() {
    likes++;
    document.querySelector("#likes").textContent = likes + " likes";
});
