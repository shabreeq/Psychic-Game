
  var computerChoices = ['a', 'b', 'c'];

  var win = 0;
  var loss = 0;
  var guesses = 7;
  var guessed = 0;


  var winCount = document.getElementById("wins");
  var lossCount = document.getElementById("losses");
  var guessCount = document.getElementById("guessesLeft");
  var letterGuessed = document.getElementById("guessesSoFar");

  // var user = document.getElementById("wins");

  document.onkeyup = function(event){

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
  
    // for (var i = 0; i < winCount.length; i++);{
    for (var i = 0; i < guessCount.length; i++);{
  
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
    if((guessCount <= 0)){
      
    }
  
  }

  }
  

 
