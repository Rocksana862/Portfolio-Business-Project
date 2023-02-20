// Service slider Js Start
$('.slick_slide').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots: true,
  infinite: false,
});
// Service slider Js Ends

// Tesimonial Slider js start
$('.cust_slide').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots: true,
  infinite: false,
});
// Testimonial Slider js ends
// Company logo slider js start
$('.company_slide').slick({
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots: true,
  infinite: false,
});
// Company logo slider js ends

// faq page js start 
$(document).ready(function(){
$('.faq-page i').on ('click',function(){
  $(this)
  .next()
  .slideToggle();
  });
});
//faq page js ends
// Circular Progress circle start

$(function(){
  $('.circlechart').circlechart();
});

// Circular Progress circle ends
// rela solution js start 

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
});

// rela solution js ends
// RESPONSIVE MEDIA QUERY START

const navTogger = document.querySelector('.nav-toggle');
navTogger.addEventListener('click', navToggo );
function navToggo(){
  navTogger.classList.toggle("active");
  const main_nav = document.querySelector('.main_nav');
  main_nav.classList.toggle('open');
 if(main_nav.classList.contains('open') ){
   main_nav.style.maxHeight = main_nav.scrollHeight + 'px';
 }else{
  main_nav.removeAttribute('style')
 }
 ;
}

// RESPONSIVE MEDIA QUERY ENDS


