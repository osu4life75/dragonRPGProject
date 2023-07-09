let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterhealth;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStatus = document.querySelector("#monsterStatus");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [{
        name: "stick",
        power:  5
    
    },
    {
        name: "dagger",
        power: 30
    },
    {
        name: "clawhammer",
        power: 50

    },
    {
        name: "sword",
        power: 100
    }

];

const locations = [
  {
    name: "town square",
      "button text": ["Go to store", "Go to Cave","Fight dragon"],
      "button funtions": [goStore, goCave, fightDragon],
      text:"You are in town square. You see a sign that says\"Store.\""
      
    
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)" , "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store"
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast" , "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the cave. You see some monsters"
  }
]
  

// intitialize button

button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(x){
  button1.innerText = x["button text"][0];
  button2.innerText = x["button text"][1];
  button3.innerText =x["button text"][2];
  button1.onclick = x["button functions"][0];
  button2.onclick =x["button functions"][1];
  button3.onclick = x["button functions"][2];
  text.innerText = x.text;
  
  
}

function goTown(){
   update(locations[0]);
  }
function goStore(){
  update(locations[1]);
}

function goCave(){
  console.log("Going to cave.");
}

function fightDragon(){
  console.log("Fighting dragon.");
}

function buyHealth(){
    if (gold >= 10){ 
        gold -= 10
        health += 10
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to by health.";
    }
   
  
}

function buyWeapon(){
   if(currentWeapon < weapons.length - 1){
      if(gold >= 30){
      gold -= 30;
      currentWeapon ++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ". ";
      inventory.push(newWeapon);
      text.innerText += "In you inventory you have: " + inventory;

    } else {
        text.innerText = "You do not have enough gold to buy a weapon.";
    }
  }
  else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold";
        button2.onclick = sellWeapon;

    }
 
}

function sellWeapon() {
    
}


function fightSlime(){
  
}

function fightBeast(){
  
}
