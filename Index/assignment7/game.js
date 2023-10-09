window.onload = pageLoad;

function pageLoad(){
	document.getElementById("start").onclick = startGame;

}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.2; 
	var second = min*60; 
	var x = document.getElementById("clock");
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount(){
		var getAllElement = 0;
		x.innerHTML = second;
		var allbox = document.querySelectorAll("#layer div");

		if (allbox.length === getAllElement) {
			alert("Win!!");
			clearInterval(timer);
			timer = null;
			clearScreen();
		}

		if (second === getAllElement) {
			alert("GAME OVER");
			alert("Lost!!");
			clearInterval(timer);
			timer = null;
			clearScreen();
		}

		else{
			second--;
		}
	}
}

function addBox(){
	var numbox = document.getElementById("numbox").value;
	var gameLayer = document.getElementById("layer");
	var colorDrop = document.getElementById("color").value;
	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement('div');
		tempbox.className = "square";
		tempbox.id = "box"+i;
		tempbox.classList.add(colorDrop);

		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#layer div");

	for (var i=0;i<allbox.length;i++){
		allbox[i].remove();
	}
}




