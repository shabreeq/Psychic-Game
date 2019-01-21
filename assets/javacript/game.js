
  var computerGuess = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];

  var winCount = 0;
  var lossCount = 0;
  var guessCount = 7;
  var letterGuessed = 0;

var user = document.getElementById("wins");
document.onkeyup = function(event){
  var userGuess = event.key;

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  console.log("User guess: " + userGuess);
  console.log("Computer guess: " + computerGuess);

  for (var i = 0; i < computerGuess.length[i]; i++);{

  if(userGuess === computerGuess){
    wins++
    }
  if(userGuess !== computerGuess){
      losses++
      }

   

  
  
  }

}