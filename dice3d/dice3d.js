function rollCube(die) {
	var xRand = getRandom(-8, 8) * 90
	var yRand = getRandom(-8, 8) * 90
	rollCube.style.transform = 'rotateX(45deg) rotateY(45deg)'
}

function getRandom(max, min) {
	let randFloat = Math.random();
	randFloat *= max - min
	randFloat += min;
	return Math.ceil(randFloat);
}

function posMod(n, m) {
	return ((n % m) + m) % m;
}

function getResult(rotX, rotY) {
	let countX = posMod(rotX / 90, 4);
	if (countX === 1) return 6; // bottom
	if (countX === 3) return 5; // top

	let countY = mod(rotY / 90 + countX, 4);
	
	return [1, 4, 2, 3][countY];
}
