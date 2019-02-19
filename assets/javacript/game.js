
  var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f'];

  var win;
  var loss;
  var guesses;
  var guessed;
  var  guessCount;


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
    guessed = 0;
    guessCount = 7;
  
    if((userGuess === computerGuess)){
     
      wins++
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
 
    winCount.textContent = wins;
    lossCount.textContent = loss;
    guessCount.textContent = guesses;
    letterGuessed.textContent = [userGuess];
  
  
  }
    

}
  

 
