let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
//Boucle for pour itérer au travers de l'objet spaceship (plus précisément dans la catégorie crew)
for (let crewMember in spaceship.crew) {
    //On affiche le rôle des passageers avec ${crewMember}
    //On affiche le nom du passager occupant le rôle correspondant avec  ${spaceship.crew[crewMember].name}
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
  //ATTENTION NE PAS OUBLIER ^  (l'espace apres le :)
};

for (let crewMember in spaceship.crew) {
    //Ici on log le nom du passager ainsi que son diplôme
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};

// Test perso
let galaxy = {
    stars: {
        'Betelgeuse': {
            name: 'Betelgeuse',
            type: 'Red Dwarf',
            temperature: 40000,
            luminosity: 0.1,
            mass: 1.3,
            radius: 15,
            orbit: 'Alpha Centauri'
        },
        'Rigel': {
            name: 'Rigel',
            type: 'Red Dwarf',
            temperature: 35000,
            luminosity: 0.1,
            mass: 1.3,
            radius: 15,
            orbit: 'Alpha Centauri'
        }
    }
}

for (let star in galaxy.stars) {
    console.log(`${galaxy.stars[star].name}: ${galaxy.stars[star].type}`)
    console.log(`${galaxy.stars[star].name}: ${galaxy.stars[star].temperature}`)

    console.log(`${galaxy.stars[star].name}: ${galaxy.stars[star].luminosity}`)
    console.log(`${galaxy.stars[star].name}: ${galaxy.stars[star].mass}`)

    console.log(`${galaxy.stars[star].name}: ${galaxy.stars[star].radius}`)
    console.log(`${galaxy.stars[star].name}: ${galaxy.stars[star].orbit}`)
}

// Objets accessibles via this
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`  
    }  
  };
  console.log(robot.provideInfo());


  /*
  Getters can perform an action on the data when getting a property.
Getters can return different values using conditionals.
In a getter, we can access the properties of the calling object using this.
The functionality of our code is easier for other developers to understand.
*/
const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
  
  // To call the getter method: 
  person.fullName; // 'John Doe'
  
// Fonctions 'factory'
// On peut créer en grande quantité des objets grâce à ceci.
// La seule différence, les paramètres.
  const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();


  // Destructuring
  const robot2 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };

  // On peut déstructurer les objets pour économiser quelques touches.
  const {functionality } = robot2;
  
  //Une fois que la variable functionality a pris les mêmes valeurs que robot2.functionality, on peut utiliser la fonction .beep() comprise à l'intérieur.
  functionality.beep();




 