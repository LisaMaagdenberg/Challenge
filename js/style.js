var catPicture = [
	{
		src: "images/dancing-cat.jpg",
		alt: "dancing cat",
		class: "responsive-img",
	}, {
		src: "images/funny-cat.jpg",
		alt: "Cat with glasses",
		class: "responsive-img",
	}, {
		src: "images/cute-cat.jpg",
		alt: "Sleepy cat",
		class: "responsive-img",
	}, {
		src: "images/sunglasses.jpg",
		alt: "Cat with sunglasses",
		class: "responsive-img",
	}, {
		src: "images/burrito.jpg",
		alt: "Burrito cat",
		class: "responsive-img",
	}, {
		src: "images/sushi.jpg",
		alt: "Sushu cat",
		class: "responsive-img",
	}, {
		src: "images/pikachu.jpg",
		alt: "Pikachu cat",
		class: "responsive-img",
	}, {
		src: "images/hunt.jpg",
		alt: "Cat in grass",
		class: "responsive-img",
	}
]

function picture() {
	$('#pic1').attr(catPicture[0]);
	$('#pic2').attr(catPicture[1]);
	$('#pic3').attr(catPicture[2]);
	$('#pic4').attr(catPicture[3]);
	$('#pic5').attr(catPicture[4]);
	$('#pic6').attr(catPicture[5]);
	$('#pic7').attr(catPicture[6]);
	$('#pic8').attr(catPicture[7]);
};

$(document).ready(picture);