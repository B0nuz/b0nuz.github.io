var img = document.getElementById('slideshow');
var slideNumber = 2;
var maxSlides = 3;
var time = 5; //in seconds
window.setInterval(function(){
	if(slideNumber<maxSlides)
	{
		img.style.backgroundImage = "url('slideshow/slide" + slideNumber + ".jpg')";
		slideNumber++;
	}
	else
	{
		img.style.backgroundImage = "url('slideshow/slide" + slideNumber + ".jpg')";
		slideNumber=1;
	}
}, time * 1000);