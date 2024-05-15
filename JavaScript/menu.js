 //Projet menu
 let menu = {
    _meal: '',
    _price: 0,
    /**
     * @param {string} mealToCheck
     */
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string'){
        return this._meal = mealToCheck
      }
    },
    /**
     * @param {number} priceToCheck
     */
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        return this._price = priceToCheck
      }
    },
    get todaysSpecial() {
      if (this._meal != '' && this._price != 0){
        return `Today’s Special is ${this._meal} for $${this._price}!`
      }
      else{
        return 'Meal of price was not set correctly'
      }
    }
  }
  menu.meal= 'Poulet';
  menu.price =4.99;
  
  console.log(menu.todaysSpecial);



  //Projet team et game
  const team = {
    _players: [],
    _games:[],
    get players() {
      return this._players
    },
    get games() {
      return this._games
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      }
      this._players.push(player)
    },
    addGame(newOpponent,newTeamPoints,newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      }
      this._games.push(game)
    }
  }
  team.addPlayer('Bugs','Bunny', 76);
  team.addGame('Titans', 100, 98);
  
  
  
  
  team._players.push({
    firstName:'Kendrick',
    lastName:'Lamar',
    age:28
  });
  
  team._players.push({
    firstName:'Travis',
    lastName:'Scott',
    age:25
  });
  
  team._players.push({
    firstName:'Metro',
    lastName:'Boomin',
    age:24
  });
  
  
  
  team._games.push({
    opponent:'Barcelone',
    teamPoints: 4,
    opponentPoints: 1
  });
  
  team._games.push({
    opponent:'Arsenal',
    teamPoints: 1,
    opponentPoints: 2 
  });
  
  team._games.push({
    opponent:'Real Madrid',
    teamPoints: 1,
    opponentPoints: 1
  });
  
  console.log(team.players)
  console.log(team.games)


  
  
  export default team;