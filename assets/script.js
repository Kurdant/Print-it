const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const Fleche_gauche = document.querySelector(".arrow_left");
const Fleche_droite = document.querySelector(".arrow_right");
const imageContainer = document.querySelector(".banner-img");
const tagLineContainer = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

Fleche_gauche.addEventListener("click", () => changeSlide("gauche"));
Fleche_droite.addEventListener("click", () => changeSlide("droite"));

let count = 0;

function changeSlide(direction) {

	dots.forEach(dot => dot.classList.remove("dot_selected"));

	if (direction === "gauche") {
		count--;
		if (count < 0) {
			count = slides.length - 1;
		}
	} else {
		count++;
		if (count === slides.length) {
			count = 0;
		}
	}

	const slide = slides[count];
	imageContainer.src = slide.image;
	tagLineContainer.innerHTML = slide.tagLine;

	dots[count].classList.add("dot_selected");
}




		
