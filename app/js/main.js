$(function(){

   $('.review__slider').slick({
      dots: true,
      prevArrow: '<span class="review__arrow review__arrow-left"><svg><use xlink:href="images/sprite.svg#prevarrow"></use></svg>',
      nextArrow: '<span class="review__arrow review__arrow-right"><svg><use xlink:href="images/sprite.svg#nextarrow"></use></svg>'
   });

   var mixer = mixitup('.categories__meals');

   const mediaQuery = window.matchMedia('(max-width: 576px)')

   function handleTabletChange(e) {
      if (e.matches) {
         $('.restaurants__inner').slick({
            arrows: false,
            dots: true
         });
      } else {
         false
      }
    }
    mediaQuery.addListener(handleTabletChange)
    handleTabletChange(mediaQuery)


    $('.menu-btn, .menu-btnclose').on('click', function() {
      $('.menu-btn,.menu__mobile').toggleClass('active');
      $('body').toggleClass('lock');
   });

});