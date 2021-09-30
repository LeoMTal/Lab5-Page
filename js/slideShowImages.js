const slideCarouselImage = document.querySelector('.slide-image');
const eachImageCarouselNumber = document.querySelectorAll('.slide-image img');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let counter = 1;
const size = eachImageCarouselNumber[0].clientWidth;

slideCarouselImage.style.transform = 'translateX(' + ( -size * counter) + 'px)';


nextBtn.addEventListener('click', () => {
    if(counter >= eachImageCarouselNumber.length - 1){
        return;
    }
    slideCarouselImage.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slideCarouselImage.style.transform = 'translateX(' + ( -size * counter) + 'px)';
})

prevBtn.addEventListener('click', () => {
    if(counter <= 0){
        return;
    }
    slideCarouselImage.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slideCarouselImage.style.transform = 'translateX(' + ( -size * counter) + 'px)';
})

slideCarouselImage.addEventListener('transitionend', () => {
    if(eachImageCarouselNumber[counter].id === 'lastClone'){
        slideCarouselImage.style.transition = "none";
        counter = eachImageCarouselNumber.length - 2;
        slideCarouselImage.style.transform = 'translateX(' + ( -size * counter) + 'px)';
    }if(eachImageCarouselNumber[counter].id === 'firstClone'){
        slideCarouselImage.style.transition = "none";
        counter = eachImageCarouselNumber.length - counter;
        slideCarouselImage.style.transform = 'translateX(' + ( -size * counter) + 'px)';
    }
})

