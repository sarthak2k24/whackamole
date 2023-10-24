let currentMoleTile;
let currentPlantTile;
let score = 0;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  //set up the grid for the game board in hmtl
  for (let i = 0; i < 9; i++) {
    // i goes from 0 to 8

    //div id="0-8"></div>
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }

  setInterval(setMole, 1000); //setMole is a function that will be called every 2 seconds 1000ms = 1seconds
  setInterval(setPlant, 2000); //setPlant is a function that will be called every 3 seconds 2000ms = 2seconds
}

function getRandomTile() {
  // math.random --> (0-1) * 9 =(0-9) --> round down to (0-8) integers
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }
  if (currentMoleTile) {
    currentMoleTile.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "./assets/monty-mole.png";

  let num = getRandomTile();
  if (currentPlantTile && num === currentPlantTile.id) {
    return;
  }
  currentMoleTile = document.getElementById(num);
  currentMoleTile.appendChild(mole);
}

function setPlant() {
  if (gameOver) {
    return;
  }
  if (currentPlantTile) {
    currentPlantTile.innerHTML = "";
  }

  let plant = document.createElement("img");
  plant.src = "./assets/piranha-plant.png";

  let num = getRandomTile();

  if (currentMoleTile && num === currentMoleTile.id) {
    return;
  }

  currentPlantTile = document.getElementById(num);
  currentPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currentMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this == currentPlantTile) {
    document.getElementById("score").innerText =
      "Game Over:" + score.toString();
    gameOver = true;
  }
}
