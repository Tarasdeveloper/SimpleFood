$(function(){

   $('.review__slider').slick({
      dots: true,
      prevArrow: '<span class="review__arrow review__arrow-left"><svg><use xlink:href="images/sprite.svg#prevarrow"></use></svg>',
      nextArrow: '<span class="review__arrow review__arrow-right"><svg><use xlink:href="images/sprite.svg#nextarrow"></use></svg>'
   });


   var mixer = mixitup('.categories__meals');

});