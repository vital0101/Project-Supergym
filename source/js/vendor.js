// Swiper 7.4.1
import './vendor/swiper';

const swiperCoaches = new Swiper('.swiper-coaches', {
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  loop: true,
  navigation: {
    nextEl: '.coaches__button-next',
    prevEl: '.coaches__button-prev',
  },
});

const swiperReviews = new Swiper('.swiper-reviews', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.reviews__button-next',
    prevEl: '.reviews__button-prev',
  },
});

export {swiperCoaches, swiperReviews};
