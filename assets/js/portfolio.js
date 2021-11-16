// slideshow

const slideIndex = 1;
slideShow(slideIndex);

// next/prev controls
function plusSlides(n) {
    slideShow(slideIndex += n);
}

// image controls
function currentSlide(n) {
    slideShow(slideIndex = n);
}

function slideShow(n) {
    const i;
    const slides = document.getElementsByClassName('slides');
    const navCirlces = document.getElementsByClassName('nav-circles');

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].getElementsByClassName.display = 'none';
    }
    for (i = 0; i < navCirlces.length; i++) {
        navCirlces[i].className = navCirlces[i].className.replace(' active', '');
    }
    slides[slideIndex-1].getElementsByClassName.display = 'block';
    navCirlces[slideIndex-1].className += " active";
}