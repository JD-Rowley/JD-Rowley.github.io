const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');
const carousel = document.querySelector('.carousel-container');
const slidesContainer = document.querySelectorAll('.slides');

// slideshow

let currentSlide = 0;
const numSlides = document.querySelector('.slides').childElementCount;

function modulo(number, mod) {
    let result = number % mod;
    if (result < 0) {
        result += mod;
    }
    return result;
}

function handleNext() {
    currentSlide = modulo(currentSlide + 1, numSlides);
    carousel.style.setProperty('--current-slide', currentSlide);
}

function handlePrevious() {
    currentSlide = modulo(currentSlide - 1, numSlides);
    carousel.style.setProperty('--current-slide', currentSlide);   
}

// slideshow

btnPrev.addEventListener('click', handlePrevious);
btnNext.addEventListener('click', handleNext);
