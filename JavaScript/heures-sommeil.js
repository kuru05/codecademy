function getSleepHours(day) {
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 8;
      case 'wednesday':
        return 8;
      case 'thursday':
        return 8;
      case 'friday':
        return 8;
      case 'saturday':
        return 8;
      case 'sunday':
        return 8;
    }
  }
  function getActualSleepHours() {
    return (getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'))
  }
  function getIdealSleepHours() {
    let idealHours = 9;
    return (idealHours*7);
    }
  function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    } 
    else {
      if (actualSleepHours > idealSleepHours) {
        console.log('You sleep too much! You need to sleep '+ (actualSleepHours - idealSleepHours) + 'hours less!');
      }
      else if (actualSleepHours < idealSleepHours) {
        console.log("You don't sleep enough! You still need " + (idealSleepHours - actualSleepHours) + " hours of sleep to gain!");
      }
    }
  }
  
  calculateSleepDebt();
  
  
  
  