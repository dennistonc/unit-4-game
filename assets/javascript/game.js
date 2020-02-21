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

//////RESET//////
function reset() {
    allButScoreReset = function(){
        randomNumber.reset();
        ourScore.reset();
        crystalOneVar.reset();
        crystalTwoVar.reset();
        crystalThreeVar.reset();
        crystalFourVar.reset();
    }
    
    var randomNumber;
    var crystalOneVar;
    var crystalTwoVar;
    var crystalThreeVar;
    var crystalFourVar;
    }
//////////////////

// Generate Score to Match (random number) -- The random number shown at the start of the game should be between 19 - 120.
randomNumber = Math.floor(Math.random() * 101) + 19;
console.log(randomNumber);

// Generate Random Crystal Values -- * Each crystal should have a random hidden value between 1 - 12.
crystalOneVar = Math.floor(Math.random() * 12) + 1;
crystalTwoVar = Math.floor(Math.random() * 12) + 1;
crystalThreeVar = Math.floor(Math.random() * 12) + 1;
crystalFourVar = Math.floor(Math.random() * 12) + 1;
console.log(crystalOneVar, crystalTwoVar, crystalThreeVar, crystalFourVar);


// Display Random Number
$("#matchingNumber").html(randomNumber);
 

// Our Score Counter
// Crystal on click, adds amount to our score
$("#crystalOne").click(function() {
    $("#yourNumber").html(crystalOneVar + ourScore);
})

// The player WINS if their total score matches the random number from the beginning of the game.
function WinLoseCounter() {
    if (ourScore === randomNumber) {
    wins++;
    alert("You Win!");
    }

    else if (ourScore > randomNumber) {
    losses++;
    alert("Ya lose buddy boiii");
    }
}
// The player LOSES if their score goes above the random number.
// The game restarts whenever the player wins or loses.