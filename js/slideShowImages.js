var swiper = new Swiper(".recent-slider", {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 0,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    clickable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 5,
    },
  },
});