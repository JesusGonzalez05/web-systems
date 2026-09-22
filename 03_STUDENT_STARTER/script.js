// -------------------------
// GET THE HTML ELEMENTS
// -------------------------

const thriftButton = document.querySelector("#thrift-btn");
const crochetButton = document.querySelector("#crochet-btn");
const mangaButton = document.querySelector("#manga-btn");

const revealButton = document.querySelector("#reveal-btn");

const toggleButton = document.querySelector("#toggle-btn");

const hours = document.querySelector("#hours");

const activityTitle = document.querySelector("#activity-title");
const tagline = document.querySelector("#tagline");
const result = document.querySelector("#result");

const activityImage = document.querySelector("#activity-image");

const instructions = document.querySelector("#instructions");

const clickCount = document.querySelector("#click-count");


// -------------------------
// CURRENT ACTIVITY
// -------------------------

let currentActivity = "";


// -------------------------
// CLICK COUNTER
// -------------------------

let count = 0;


// -------------------------
// THRIFTING
// -------------------------

thriftButton.addEventListener("click", function() {

    document.body.className = "thrifting";

    currentActivity = "thrifting";

    activityTitle.textContent = "Thrifting";

    tagline.textContent =
        "Time to find something you absolutely did not need.";

    activityImage.src = "thrifting.png";

    activityImage.alt = "Thrift store";

    result.textContent =
        "Pick your hours and let's see what kind of thrift adventure you get!";

});


// -------------------------
// CROCHETING
// -------------------------

crochetButton.addEventListener("click", function() {

    document.body.className = "crocheting";

    currentActivity = "crocheting";

    activityTitle.textContent = "Crocheting";

    tagline.textContent =
        "Get comfy, grab your yarn, and relax.";

    activityImage.src = "crochet.png";

    activityImage.alt = "Crocheting and yarn";

    result.textContent =
        "Pick your hours and let's see what you should work on!";

});


// -------------------------
// MANGA
// -------------------------

mangaButton.addEventListener("click", function() {

    document.body.className = "manga";

    currentActivity = "manga";

    activityTitle.textContent = "Reading Manga";

    tagline.textContent =
        "Enter the domain. Do not disturb.";

    activityImage.src = "manga.png";

    activityImage.alt = "Reading manga";

    result.textContent =
        "Pick your hours and let's see how deep into the manga you should go!";

});


// -------------------------
// REVEAL THE PLAN
// -------------------------

revealButton.addEventListener("click", function() {

    // -------------------------
    // CHANGE BUTTON TEXT
    // -------------------------

    revealButton.textContent = "PLAN REVEALED!";


    // -------------------------
    // CLICK COUNTER
    // -------------------------

    count++;

    clickCount.textContent = count;


    // -------------------------
    // MAKE SURE AN ACTIVITY
    // WAS SELECTED
    // -------------------------

    if (currentActivity === "") {

        result.textContent =
            "Pick an activity first!";

        return;
    }


    // Get the selected number of hours

    const selectedHours = hours.value;


    // -------------------------
    // THRIFTING RESULTS
    // -------------------------

    if (currentActivity === "thrifting") {

        if (selectedHours === "1") {

            result.textContent =
                "You have 1 hour! Hit one thrift store and look for one amazing find.";

        }

        else if (selectedHours === "2") {

            result.textContent =
                "You have 2 hours! Hit a couple of thrift stores and hunt for some vintage treasures.";

        }

        else if (selectedHours === "4") {

            result.textContent =
                "You have 4 hours! Make it a full thrift adventure. Hit multiple stores and find something groovy.";

        }

    }


    // -------------------------
    // CROCHETING RESULTS
    // -------------------------

    else if (currentActivity === "crocheting") {

        if (selectedHours === "1") {

            result.textContent =
                "You have 1 hour! Work on a few rows and enjoy a quick little crochet session.";

        }

        else if (selectedHours === "2") {

            result.textContent =
                "You have 2 hours! Get comfortable, put on some music, and make some progress on your project.";

        }

        else if (selectedHours === "4") {

            result.textContent =
                "You have 4 hours! This is a serious crochet session. Get your yarn, snacks, and settle in.";

        }

    }


    // -------------------------
    // MANGA RESULTS
    // -------------------------

    else if (currentActivity === "manga") {

        if (selectedHours === "1") {

            result.textContent =
                "You have 1 hour! Read a few chapters and see what happens next.";

        }

        else if (selectedHours === "2") {

            result.textContent =
                "You have 2 hours! Perfect time for a solid manga session. Phone on Do Not Disturb.";

        }

        else if (selectedHours === "4") {

            result.textContent =
                "You have 4 hours! You've entered the domain expansion. Get comfortable and prepare to binge.";

        }

    }

});


// -------------------------
// HIDE / SHOW INSTRUCTIONS
// -------------------------

toggleButton.addEventListener("click", function() {

    if (instructions.style.display === "none") {

        instructions.style.display = "block";

        toggleButton.textContent = "Hide Instructions";

    }

    else {

        instructions.style.display = "none";

        toggleButton.textContent = "Show Instructions";

    }

});