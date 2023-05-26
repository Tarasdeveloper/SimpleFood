$(function () {

   $('.filter-price__input').ionRangeSlider({
      type: "double",
      prefix: "от",
      postfix: " €",
   });

   $(window).scroll(function () {
      if ($(window).scrollTop() >= 50) {
         $('.header').addClass('sticky')
      } else {
         $('.header').removeClass('sticky')
      }
   });

   $('.review__slider').slick({
      dots: true,
      prevArrow: '<span class="review__arrow review__arrow-left"><svg><use xlink:href="images/sprite.svg#prevarrow"></use></svg>',
      nextArrow: '<span class="review__arrow review__arrow-right"><svg><use xlink:href="images/sprite.svg#nextarrow"></use></svg>',

      responsive: [{
         breakpoint: 992,
         settings: {
            dots: false,
         }
      }]
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
         $('.restaurants__inner').slick('unslick')
      }
   }
   mediaQuery.addListener(handleTabletChange);
   handleTabletChange(mediaQuery);


   $('.menu-btn, .menu-btnclose').on('click', function () {
      $('.menu-btn, .menu__mobile').toggleClass('active');
      $('body').toggleClass('lock');
   });

   //   document.addEventListener('click', function (e) {
   //    if (e.target !== burger && e.target !== mobileMenu) {
   //      burger.classList.remove('burger--active');
   //      mobileMenu.classList.remove('menu--active');
   //      bodyLock.classList.remove('lock');
   //    }
   //  });
   

});