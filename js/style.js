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

$(document).ready(picture);

function picture() {
	for (var i = 0; i < catPicture.length; i++) {
		var idNumber = i + 1;
		var catImage = '<img src="' + catPicture[i].src + '"' + 
			'class="' + catPicture[i].class + '"' +
			'alt="' + catPicture[i].alt + '">';
		$("#p" + idNumber).prepend(catImage);				
	}
}

// function picture() {
// 	for (var i = 0; i < catPicture.length; i++) {
// 		var idNumber = i + 1;
// 		var catImage = catPicture[i];
// 		$("#p" + idNumber).prepend(catImage);
// 	}
// }