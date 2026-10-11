// LUXE ESCAPE CONCIERGE — STUDENT STARTER

const nameInput = document.querySelector("#name");
const destinationInput = document.querySelector("#destination");
const vibeInput = document.querySelector("#vibe");
const budgetInput = document.querySelector("#budget");
const mustHaveInput = document.querySelector("#mustHave");

const saveBtn = document.querySelector("#saveBtn");
const forgetBtn = document.querySelector("#forgetBtn");

const welcome = document.querySelector("#welcome");
const savedDestination = document.querySelector("#savedDestination");
const savedVibe = document.querySelector("#savedVibe");
const savedBudget = document.querySelector("#savedBudget");
const savedMustHave = document.querySelector("#savedMustHave");
const tripCount = document.querySelector("#tripCount");



saveBtn.addEventListener("click", function () {

  // Create a trip object
  const trip = {
    name: nameInput.value,
    destination: destinationInput.value,
    vibe: vibeInput.value,
    budget: budgetInput.value,
    mustHave: mustHaveInput.value
  };

  // Save the trip to local storage
  localStorage.setItem("trip", JSON.stringify(trip));

  // Display the saved trip
  savedDestination.textContent = trip.destination;
  savedVibe.textContent = trip.vibe;
  savedBudget.textContent = trip.budget;
  savedMustHave.textContent = trip.mustHave;

  welcome.textContent = "Trip saved!";


});




// --------------------------------------------------
// PART 4: CLIENT REQUEST CHALLENGE
// Choose TWO upgrades from the class menu.
// Examples:
// - Welcome me back
// - Remember my theme
// - Forget my trip
// FORGET THE SAVED TRIP 
function forgetTrip() { 
  localStorage.removeItem("trip"); 
  savedDestination.textContent = "—"; 
  savedVibe.textContent = "—"; 
  savedBudget.textContent = "—"; 
  savedMustHave.textContent = "—"; 
  welcome.textContent = "No trip saved yet."; 
} 
// Run the forget function when the button is clicked 
forgetBtn.addEventListener("click", forgetTrip);
// - Trip counter
// - Recently planned destinations

// --------------------------------------------------
// Load the saved trip when the page refreshes
function loadTrip() {

  const savedTrip = localStorage.getItem("trip");

  if (savedTrip) {

    const trip = JSON.parse(savedTrip);

    savedDestination.textContent = trip.destination;
    savedVibe.textContent = trip.vibe;
    savedBudget.textContent = trip.budget;
    savedMustHave.textContent = trip.mustHave;

    welcome.textContent = "Welcome back! Your trip is still saved.";

  } else {

    savedDestination.textContent = "—";
    savedVibe.textContent = "—";
    savedBudget.textContent = "—";
    savedMustHave.textContent = "—";

    welcome.textContent = "No trip saved yet.";
  }
}

// Run when the page loads
loadTrip();