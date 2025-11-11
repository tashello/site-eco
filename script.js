const swiper = new Swiper('.swiper', {

    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 30,
    loop: true,

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  breakpoints: {
    // моб
    320: {
      slidesPerView: 1,  // 1 карточка
      spaceBetween: 10   // Меньший отступ
    },
    // планш
    768: {
      slidesPerView: 2,  // 2 карточки
      spaceBetween: 20
    },
    // пк
    1024: {
      slidesPerView: 4,  // 4 карточки
      spaceBetween: 30
    }
  }
});