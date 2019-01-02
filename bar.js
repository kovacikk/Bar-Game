var enemyGreenBar = document.querySelector(".greenBar");

var enemyClicks = 0;

function updateEnemyGreenBar() {
	if (enemyClicks < 100) {
		enemyClicks += .5;
		enemyGreenBar.style.width = enemyClicks + "%";
	}
	else {
		
	}
}

var playerButton = document.querySelector("#playerButton");
var playerVertPos = 195;
var playerHorPos = 175;
var playerGreenBar = document.querySelector("#playerBarGreen");

var kirbAttack0 = document.querySelector("#kirbAttack0");
var kirbAttack1 = document.querySelector("#kirbAttack1");
var kirbAttack2 = document.querySelector("#kirbAttack2");
var kirbAttack3 = document.querySelector("#kirbAttack3");
var kirbAttack4 = document.querySelector("#kirbAttack4");


var playerClicks = 0;

function updatePlayerGreenBar() {
	if (playerClicks < 100) {
		playerClicks += 5;
		playerGreenBar.style.width = playerClicks + "%";
		
		randomPlace(playerButton);
		randomPlace(kirbAttack0);
		randomPlace(kirbAttack1);
		randomPlace(kirbAttack2);
		randomPlace(kirbAttack3);
		randomPlace(kirbAttack4);
	}
	else {
		
	}
}

var interval;

function hoverEnemyStart() {
	interval = setInterval(updateEnemyGreenBar, 12.5);
}
function hoverEnemyEnd() {
	clearInterval(interval);
}

function randomPlace(object) {
	playerHorPos = Math.floor(Math.random() * 351);
	object.style.marginLeft = playerHorPos;
	playerVertPos = Math.floor(Math.random() * 391);
	object.style.marginTop = playerVertPos;
}

function randomMove (object, vertPos, horPos) {
	
	console.log(vertPos);
	console.log(horPos);
	//Move Up or Down?
	
	
	var isMove = 0;
	
	while (!isMove) {
		
		var upBool = Math.floor(Math.random() * 2);
		console.log(upBool);
		
		if (upBool && (vertPos != 0)) {
			object.style.marginTop = vertPos + 1;
			playerVertPos += 1;
			isMove = 1;
		}else if (!upBool && (vertPos != 390)) {
			object.style.marginTop = vertPos - 1;
			playerVertPos -= 1;
			isMove = 1;
		}
	}
	
	//Move Right or Left?
	
	var isMove = 0;
	
	while (!isMove) {
		
		var rightBool = Math.floor(Math.random() * 2);
		console.log(rightBool);
		
		if (rightBool && (horPos != 350)) {
			object.style.marginLeft = horPos + 1;
			playerHorPos += 1;
			isMove = 1;
		}else if (!rightBool && (horPos != 0)) {
			object.style.marginLeft = horPos - 1;
			playerHorPos -= 1;
			isMove = 1;
		}
	}
	
	console.log("Moved!");
}

var rOLInterval;
function startMoving() {
	rOLInterval = window.setInterval(rightOrLeftMove, 10);
	console.log("Start");
}

function stopMoving() {
	clearInterval(rOLInterval);
	console.log("Stop");
}


var testMove = document.querySelector("#testMove");
var endMove = document.querySelector("#endMove");

testMove.addEventListener("click", startMoving);
endMove.addEventListener("click", stopMoving);

var direction = "right";
function rightOrLeftMove () {
	
	
		if (direction == "right") {
			if (playerHorPos == 350) {
				direction = "left";
				playerButton.style.marginLeft = playerHorPos - 1;
				playerHorPos -= 1;
			}
			else {
				playerButton.style.marginLeft = playerHorPos + 1;
				playerHorPos += 1;
			}
		}
		else {
			if (playerHorPos == 0) {
				direction = "right";
				playerButton.style.marginLeft = playerHorPos + 1;
				playerHorPos += 1;
			}
			else {
				playerButton.style.marginLeft = playerHorPos - 1;
				playerHorPos -= 1;
			}
		}
}

var startGameButton = document.querySelector("#startGame");
startGameButton.addEventListener("click", startGame);

var resetGameButton = document.querySelector("#resetGame");
resetGameButton.addEventListener("click", resetGame);

var isGameOverTimer = null;

var isMoving = false;
function startGame() {
	playerButton.addEventListener("click", updatePlayerGreenBar);
	kirbAttack0.addEventListener("mouseover", hoverEnemyStart);
	kirbAttack0.addEventListener("mouseout", hoverEnemyEnd);
	kirbAttack1.addEventListener("mouseover", hoverEnemyStart);
	kirbAttack1.addEventListener("mouseout", hoverEnemyEnd);
	kirbAttack2.addEventListener("mouseover", hoverEnemyStart);
	kirbAttack2.addEventListener("mouseout", hoverEnemyEnd);
	kirbAttack3.addEventListener("mouseover", hoverEnemyStart);
	kirbAttack3.addEventListener("mouseout", hoverEnemyEnd);
	kirbAttack4.addEventListener("mouseover", hoverEnemyStart);
	kirbAttack4.addEventListener("mouseout", hoverEnemyEnd);
	
	if (isMoving == false) {
		rOLInterval = window.setInterval(rightOrLeftMove, 10);
		isMoving = true;
	}
	
	console.log("startGame");
	
	isGameOver();
}

function resetGame() {
	playerButton.removeEventListener("click", updatePlayerGreenBar);
	kirbAttack0.removeEventListener("mouseover", hoverEnemyStart);
	kirbAttack0.removeEventListener("mouseout", hoverEnemyEnd);
	kirbAttack1.removeEventListener("mouseover", hoverEnemyStart);
	kirbAttack1.removeEventListener("mouseout", hoverEnemyEnd);
	kirbAttack2.removeEventListener("mouseover", hoverEnemyStart);
	kirbAttack2.removeEventListener("mouseout", hoverEnemyEnd);
	kirbAttack3.removeEventListener("mouseover", hoverEnemyStart);
	kirbAttack3.removeEventListener("mouseout", hoverEnemyEnd);
	kirbAttack4.removeEventListener("mouseover", hoverEnemyStart);
	kirbAttack4.removeEventListener("mouseout", hoverEnemyEnd);
	
	clearInterval(rOLInterval);
	isMoving = false;
	
	playerButton.style.marginTop = 195;
	playerButton.style.marginLeft = 175;
	playerVertPos = 195;
	playerHorPos = 175;
	kirbAttack0.style.marginTop = 195;
	kirbAttack0.style.marginLeft = 195;
	kirbAttack1.style.marginTop = 195;
	kirbAttack1.style.marginLeft = 195;
	kirbAttack2.style.marginTop = 195;
	kirbAttack2.style.marginLeft = 195;
	kirbAttack3.style.marginTop = 195;
	kirbAttack3.style.marginLeft = 195;
	kirbAttack4.style.marginTop = 195;
	kirbAttack4.style.marginLeft = 195;
	
	enemyGreenBar.style.width = 0;
	playerGreenBar.style.width = 0;
	
	enemyClicks = 0;
	playerClicks = 0;
	
	clearTimeout(isGameOverTimer);
	
	console.log("resetGame");
}

var gameScreen = document.querySelector("#gameScreen");
var loseScreen = document.querySelector("#loseScreen");
var winScreen = document.querySelector("#winScreen");

var anotherRound1 = document.querySelector("#anotherRound1");
anotherRound1.addEventListener("click", anotherRoundFunc);

var anotherRound2 = document.querySelector("#anotherRound2");
anotherRound2.addEventListener("click", anotherRoundFunc);


function isGameOver() {
	if (enemyClicks == 100) {
		gameScreen.style.display = "none";
		loseScreen.style.display = "block";
		
		
	}
	else if (playerClicks == 100) {
		gameScreen.style.display = "none";
		winScreen.style.display = "block";
	}	
	isGameOverTimer = setTimeout(isGameOver, 500);
}

function anotherRoundFunc() {
	gameScreen.style.display = "block";
	winScreen.style.display = "none";
	loseScreen.style.display = "none";
	playerClicks = 0;
	enemyClicks = 0;
	
	resetGame();
}







