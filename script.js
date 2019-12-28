const info = document.getElementById('interesting-piece-of-information');

const infos = [
	"Bullcrap CSS makes UI look great just by copy-pasting css classes",
	"There's many premade css classes that you can put in your class attribute",
	"You can make grids and stuff..."
];
let infoNumber = 0;

info.innerText = infos[infoNumber];
infoIteration();

info.addEventListener('animationiteration', () => {
	info.innerText = infos[infoNumber];
	infoIteration();
});

function infoIteration() {
	infoNumber = (infoNumber == infos.length - 1 ? 0 : infoNumber + 1);
}