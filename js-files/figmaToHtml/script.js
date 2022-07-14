const swiper = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 60,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 3,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
    },
    // when window width is >= 1351px
    1351: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  }
});
$('.accordion-header').click(function() {
    $(this).parent().toggleClass('show');
})
