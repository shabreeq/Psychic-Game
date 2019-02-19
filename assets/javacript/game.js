
  var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

  var win;
  var loss;
  var guesses;
  var guessed;


  var winCount = document.getElementById("wins");
  var lossCount = document.getElementById("losses");
  var guessCount = document.getElementById("guessesLeft");
  var letterGuessed = document.getElementById("guessesSoFar");

 

  document.onkeyup = function(event){

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
  
    // for (var i = 0; i < winCount.length; i++);{
    for (var i = 0; i < guessCount.length; i++);{

    wins = 0;
    loss = 0;
    guessCount = 7;
    guessed = 0;
  
    if((userGuess === computerGuess)){
     
      win++
      guesses-- 
      console.log("User guess: " + userGuess);
      console.log("Computer guess: " + computerGuess);

    }
    if((userGuess !== computerGuess)){
     
      loss++
      guesses--
      console.log("User guess: " + userGuess);
      console.log("Computer guess: " + computerGuess);

    }
      
    

    winCount.textContent = win;
    lossCount.textContent = loss;
    guessCount.textContent = guesses;
    letterGuessed.textContent = userGuess;
  
  }

  }
  

 
