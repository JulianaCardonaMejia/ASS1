
//4

function calculateCapital() {
    var amount = parseFloat(prompt("Amount to invest?"));
    var interest = parseFloat(prompt("Annual percentage interest?"));
    var years = parseInt(prompt("Years?"));
  
    if (isNaN(amount) || isNaN(interest) || isNaN(years) || amount <= 0 || interest <= 0 || years <= 0) {
      console.log("Invalid input. Please enter valid positive numbers.");
      return;
    }
  
    var capital = amount;
    var interestRate = interest / 100;
  
    for (var i = 1; i <= years; i++) {
      capital += capital * interestRate;
      console.log("Capital after", i, "year:", capital.toFixed(2) + "€");
    }
  }

  //3

  function displayYearsReached() {
    var age = parseInt(prompt("Enter your age:"));
  
    if (isNaN(age) || age <= 0) {
      console.log("Invalid age. Please enter a positive number.");
      return;
    }
  
    for (var year = 1; year <= age; year++) {
      console.log("Reached year:", year);
    }
  }

  
  //2

  function calculateWaterConsumption(time) {
    var waterPerHour = 0.5;
    var totalWater = Math.floor(waterPerHour * time);
    return totalWater;
  }

  //1

  function determineWinner(score1, score2, score3) {
    if (score1 > score2 && score1 > score3) {
      return "Participant 1";
    } else if (score2 > score1 && score2 > score3) {
      return "Participant 2";
    } else if (score3 > score1 && score3 > score2) {
      return "Participant 3";
    } else {
      return "It's a tie!";
    }
  }
  
  // Assuming scores are already calculated and stored in variables
  const participant1Score = 10;
  const participant2Score = 15;
  const participant3Score = 12;
  
  const winner = determineWinner(participant1Score, participant2Score, participant3Score);
  console.log("The best-of-3 winner is: " + winner);

  