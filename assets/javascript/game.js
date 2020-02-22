$( document ).ready(function() {
    console.log( "Ready!" );
});

// Make variables
// Random Number, Wins, Losses, Our Score, Random Crystal Values
var randomNumber;
var wins = 0;
var losses = 0;
var ourScore = 0;
var crystalOneVar;
var crystalTwoVar;
var crystalThreeVar;
var crystalFourVar;

// Generate Score to Match (random number) -- The random number shown at the start of the game should be between 19 - 120.
randomNumber = Math.floor(Math.random() * 101) + 19;
console.log(randomNumber);

// Generate Random Crystal Values -- * Each crystal should have a random hidden value between 1 - 12.
crystalOneVar = Math.floor(Math.random() * 12) + 1;
crystalTwoVar = Math.floor(Math.random() * 12) + 1;
crystalThreeVar = Math.floor(Math.random() * 12) + 1;
crystalFourVar = Math.floor(Math.random() * 12) + 1;
console.log(crystalOneVar, crystalTwoVar, crystalThreeVar, crystalFourVar);


//////RESET//////
function reset() {
        randomNumber = Math.floor(Math.random() * 101) + 19;
        console.log(randomNumber);

        ourScore = 0;

        crystalOneVar = Math.floor(Math.random() * 12) + 1;
        crystalTwoVar = Math.floor(Math.random() * 12) + 1;
        crystalThreeVar = Math.floor(Math.random() * 12) + 1;
        crystalFourVar = Math.floor(Math.random() * 12) + 1;
        console.log(crystalOneVar, crystalTwoVar, crystalThreeVar, crystalFourVar);

        $("#matchingNumber").text(randomNumber);
        $("#yourNumber").text(0);
    
    }
//////////////////


// Display Random Number
$("#matchingNumber").text(randomNumber);
 

// Crystal on click, adds amount to our score
$("#crystalOne").click(function() {
    ourScore = crystalOneVar + ourScore;
    $("#yourNumber").text(ourScore);
    TellWinner();
    TellLoser();
})

$("#crystalTwo").click(function() {
    ourScore = crystalTwoVar + ourScore;
    $("#yourNumber").text(ourScore);
    TellWinner();
    TellLoser();
})

$("#crystalThree").click(function() {
    ourScore = crystalThreeVar + ourScore;
    $("#yourNumber").text(ourScore);
    TellWinner();
    TellLoser();
})

$("#crystalFour").click(function() {
    ourScore = crystalFourVar + ourScore;
    $("#yourNumber").text(ourScore);
    TellWinner();
    TellLoser();
})

// Score Counter
// The player WINS if their total score matches the random number from the beginning of the game.
function TellWinner() {
    if (ourScore === randomNumber) {
    wins++;
    $("#winningNumber").text(wins);
    alert("You Win!");
    reset();
    }
}

function TellLoser() {
    if (ourScore > randomNumber) {
    losses++;
    $("#losingNumber").text(losses);
    alert("Take this L.");
    reset();
    }
}
// The player LOSES if their score goes above the random number.
// The game restarts whenever the player wins or loses.