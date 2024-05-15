class Media {
    //Constructeur
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    };
    //Getters
    get title() {
      return this._title;
    };
    get isCheckedOut() {
      return this._isCheckedOut;
    };
    get ratings() {
    return this._ratings;
    };
    //Méthodes
    toggleCheckedOutStatus() {
      if (this._isCheckedOut === false) {
        this._isCheckedOut = true;
        return this._isCheckedOut;
      }
      else {
        this._isCheckedOut = false;
        return this._isCheckedOut;
      }
    }
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      let averageRating = ratingsSum/ this.ratings.length;
      return averageRating;
    }
    addRating(rating) {
      this._ratings.push(rating);
      return this._ratings;
    }
    //Setter
    set isCheckedOut(verifyCheckedStatus) {
      this._isCheckedOut = verifyCheckedStatus;
    }
  };
  //Extends permet de prendre tout le contenur (setters,getters, arguments, fonctions) de la classe parente (ici, Media)
  class Book extends Media {
    constructor(author,title, pages) {
      //Hérite des arguments de la classe parente Media
      super(title);
      //Nouveaux arguments
      this._author = author;
      this._pages = pages;
    }
    //Nouveaux Getters
    get author() {
      return this._author;
    };
    get pages() {
      return this._pages;
    };
  
  };
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    };
    get director() {
      return this._director;
    };
    get runtime() {
      return this._runTime;
    };
  };
  
  //Nouvel objet Book
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  console.log(historyOfEverything.toggleCheckedOutStatus());
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(4);
  /*console.log(historyOfEverything.ratings);
  console.log(historyOfEverything.getAverageRating());
  */
  //Nouvel objet Movie
  const speed = new Movie('Jan de Bont','Speed',116);
  console.log(speed.toggleCheckedOutStatus());
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());
  