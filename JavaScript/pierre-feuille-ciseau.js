const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    }
    else if (userInput === 'bomb') {
      return 'bomb';
    }
     else {
      return undefined;
    }
  };
  
  function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
      console.log("L'utilisateur a gagné.");
    }
      else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
          console.log('The computer won');
        } else if (computerChoice === 'scissors') {
          console.log('The user won');
        }
        else if (computerChoice === userChoice) {
          console.log('The game is a tie.');
        }
      }
    else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        console.log('The computer won');
      } else if (computerChoice === 'rock') {
        console.log('The user won');
      }
      else if (computerChoice === userChoice) {
        console.log('The game is a tie.');
      }
  
    } 
    else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        console.log('The computer won');
      } else if (computerChoice === 'paper') {
        console.log('The user won');
      }
      else if (computerChoice === userChoice) {
        console.log('The game is a tie.');
      }
    }
    else {
      console.log('Il y a eu un problème.');
    }
  }
  
  function playGame()  {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('Vous avez choisi ' + userChoice);
    console.log("L'ordinateur a choisi "+ computerChoice);
  
  determineWinner(userChoice, computerChoice);
  }
  playGame();
  