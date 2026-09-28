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
// - Trip counter
// - Recently planned destinations
// --------------------------------------------------
