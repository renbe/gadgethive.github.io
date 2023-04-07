var sliderImages = document.querySelectorAll('.slider-image');
var currentSlide = 0;

function nextSlide() {
  sliderImages[currentSlide].classList.remove('active');
  sliderImages[currentSlide].classList.add('prev');
  currentSlide = (currentSlide + 1) % sliderImages.length;
  sliderImages[currentSlide].classList.add('active');
  sliderImages[currentSlide].classList.remove('next');
}

function prevSlide() {
  sliderImages[currentSlide].classList.remove('active');
  sliderImages[currentSlide].classList.add('next');
  currentSlide = (currentSlide - 1 + sliderImages.length) % sliderImages.length;
  sliderImages[currentSlide].classList.add('active');
  sliderImages[currentSlide].classList.remove('prev');
}

document.querySelector('.slider-prev').addEventListener('click', prevSlide);
document.querySelector('.slider-next').addEventListener('click', nextSlide);

setInterval(nextSlide, 5000);
var aax_size='300x600';
			var aax_pubname = '301419972017-21';
			var aax_src='302';
