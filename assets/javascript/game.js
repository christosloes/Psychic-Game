//Okay first things first I need to establish an array that has all the potential options for a player/computer to choose

var alphabetChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//next I believe we need to create the variables/buckets for everything
//we need to have wins, losses, guesses, guesses left, a place to store guessed letters, letters left to guess
//I think we need to set everything to 0 in order for the [i] indexes in the loops to worl

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var LettersLeft = [];

//Now I need to have a place where the computer will guess at random from my selection in the above array. I will use the 
//math.random thing here along with a .lenght approach. I'm following the example given in the rock paper scissors approach.
// var computerGuess = options[Math.floor(Math.random() * options.length)];

var computerGuess = alphabetChoices[Math.floor(Math.random() * alphabetChoices.length) ]

//now I need some kind of function that will let the player now how many guesses are left. Also I need to insert new Html into 
//the text I'll use something like documentwrite or .innerHTML

var updateguessesLeft = function() {
  
  document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

//Here I did a lot of googling to try and figure out how to continue with this. Essentially I want the variables above to be altered
//by the conditionals that are developed later. So I definitely got some help in doing this from a few online sources but I think that
//concept is valed. Create a bunch of functions that will shake out the variables/buckets accordingly. The following functions
//go back in to the alphabet array and update the variables given above

var updateLettersLeft = function() {
  this.LettersLeft = this.alphabetChoices[Math.floor(Math.random() * this.alphabetChoices.length)];
};

// oKAY SO i have the computer making a selection at random and updating how many guesses are left in the array. Now I need it to 
//write that in to the actual html with a new function. Some of this stuff I copied over from Javascript Diy stuff online

var updateGuessesSoFar = function() {
  // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything


//alot of this stuff that follows I copied over from another source. I knew that everytime somebody pressed something it needed to 
//reset, I just didn't really know how to code it. 
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];

  updateLettersLeft();
  updateguessesLeft();
  updateGuessesSoFar();
}

updateLettersLeft();
updateguessesLeft();


//here is where the onkeyup stuff goes in, and makes sure to check that it is lowercase. I got this from the inclass function
//exercises


document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();
//

//So the conditionals, if the letter I guess equals the randomize selection from before then I WIN, if not it is logged as 
//a loss and reset


        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic, maybe try again?");
            // Then we'll call the reset. 
            reset();
        }
};


//So the irony is I can't quite 





