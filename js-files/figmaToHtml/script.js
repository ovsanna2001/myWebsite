const swiper = new Swiper('.swiper1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 60,
});
$('.accordion-header').click(function() {
    $(this).parent().toggleClass('show');
})
