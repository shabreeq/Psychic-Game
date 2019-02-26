
  var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f'];

  var win = 0;
  var loss = 0;
  var guessed = [];
  var  guessCount = 7;
  var computerGuess;
  
  
  initiate();
  
  function initiate() {
    $("#wins").text(win);
    $("#losses").text(loss);
    $("#guessesLeft").text(guessCount);
    $("#guessesSoFar").text(guessed);
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
  }
  
  function restart() {
    
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);
    guessed = [];
    $("#guessesSoFar").text(guessed);
    guessCount = 7;
    $("#guessesLeft").text(guessCount);
  }
  
  document.onkeyup = function(event){
    
    
    console.log("eventkey; ",event.key);
    
    
    if(event.key === computerGuess){
      
      win++;  
      $("#wins").text(win);
      
      
      console.log("Computer guess: " + computerGuess);
      restart();
    }
    else{
      
      
      guessCount--;
      if (!guessCount){
        loss++;
        $("#losses").text(loss);
        restart();
        
      }
      
      else{
        guessed.push(event.key);
        $("#guessesSoFar").text(guessed);
        $("#guessesLeft").text(guessCount);

        
        
      }
      
    }
    
    

    
 
    
  
  
  }
    


  

 
