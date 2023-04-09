const slider = document.querySelector('.swiper-main');
const slider2 = document.querySelector('.swiper-category');


new Swiper(slider, {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickable: true,
  },
  // slidesPerGroup: 1,
  slidesPerView: 1,
  grabCursor: true,
});


new Swiper(slider2, {
  direction: 'horizontal',
  loop: false,
  // navigation: {
  //   nextEl: '.swiper-button-next2',
  //   prevEl: '.swiper-button-prev2',
  // },
  // pagination: {
  //   el: '.swiper-pagination',
  //   type: 'fraction',
  //   clickable: true,
  // },
  // slidesPerGroup: 1,
  breakpoints: {
    767: {
      slidesPerView: 4,
    },
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    }
  },
  slidesPerView: 4,
  grabCursor: true,
});