////////////////////////////////////////// Clasa copil => din clasa Parinte!!!!
// class Heros{
//   constructor(name, hp){
//     this.name = name;
//     this.hp = hp;
//   }
//   move(right){
//     return(`${this.name} run right`)
//   }
// }

// let annie = new Heros("Annie")
// annie.move();

// class Tristana extends Heros{                  // `extends` key word pentru a face copil => parinte
//   moves(left){
//     return(`${this.name} run left`)
//   }
// }
//  let tristana1 = new Tristana("Tristana")
//  tristana1.moves();
//  tristana1.move();





class Hero {
  constructor(name, hp) {
    this.name = name;
    this.hp = hp;
    this.canFly = false;
    this.shield = false;
  }
  attacked(damage) {
    //daca eraoul are proprietatea canFly => 50 sanse sa evite dmg-ul
    if (this.canFly) {
      let chance = Math.random();
      if (chance > 0.5) {
        console.log(this.name + " flwe away!");
        damage = 0;
      }
    }
    // daca eroul are proprietatea shield => dmg-ul este redus cu 20%
    if (this.shield) {
      damage *= 0.8; //dmg-ul se scade cu 0.2
      console.log(this.name + "defence with a shield!")
    }
    this.hp -= damage;
    console.log(this.name + " has been atacked. HP reduced by " + damage + ". HP remaining: " + this.hp + ".")
  }
}

class Dwarf extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.shield = true;
  }
  attack(otherHero) {               //celalalt erou este atacat 
    let damage = 10;
    console.log(`${this.name} attacked with damage: ${damage}.`) //dmg pe care l-a primit 
    otherHero.attacked(damage);      //celalat erou ataca
  }
}

class Sprite extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
  }
  attack(otherHero) {
    let damage = 15;
    console.log(`${this.name} attacked with damage: ${damage}.`)
    otherHero.attacked(damage);
  }
}

class Dragon extends Hero {
  constructor(name, hp) {
    super(name, hp);
    this.canFly = true;
    this.shield = true;
  }
  attack(otherHero) {
    let damage = 20;
    console.log(`${this.name} attacked with damage: ${damage}.`)
    otherHero.attacked(damage);
  }
}

class Fight {
  constructor(hero1, hero2){
    this.hero1 = hero1;
    this.hero2 = hero2;
    this.turn = 0;
  }
  performAttack() {
    // daca tura 0 ataca hero 1 => iar daca este tura 1 ataca eroul 3
    if(this.turn === 0){
      this.hero1.attack(this.hero2);
    }else {
      this.hero2.attack(this.hero1);
    }
  }
  changeTurn(){
    this.turn = 1 - this.turn;
  }
  findWinner(){
    if(this.hero1.hp > 0){
      console.log(`${this.hero1.name} won with ${this.hero1.hp} HP left. `);
    }else if(this.hero2.hp > 0){
      console.log(`${this.hero2.name} won with ${this.hero2.hp} HP left. `);
    }else{
      console.log("no hero left alive");
    }
  }
  go = function() {
    do {
      this.performAttack();
      this.changeTurn();
    }while(this.hero1.hp > 0 && this.hero2.hp > 0);

    this.findWinner();
  };
}

let dwarf = new Dwarf("Tank", 100);
let sprite = new Sprite("Magic", 80);
let dragon = new Dragon("Jungle", 120);

let newFight = new Fight(dwarf, dragon);
newFight.go();










let showHeros = document.getElementById("show-heros");
let herosContainer = document.querySelector(".hero-container");
let showHeroStory = document.querySelector("#start-fight");
let storyContainer = document.querySelector(".story");
let storyHeros = document.querySelector("#hight")

showHeros.addEventListener("click", showHeroFunction);
showHeroStory.addEventListener("click", showHeroStoryFunction);
storyHeros.addEventListener("click", hightHerosFuntion);


function showHeroFunction() {
  herosContainer.classList.add("d-flex");
  showHeroStory.classList.add("d-block");
}

function showHeroStoryFunction() {
  herosContainer.classList.remove("d-flex");
  storyContainer.classList.add("d-flex");
}

function hightHerosFuntion() {
  herosContainer.classList.add("d-flex");
  storyContainer.classList.remove("d-flex");

  
}
    






