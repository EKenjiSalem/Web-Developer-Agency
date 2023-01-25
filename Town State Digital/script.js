// Jquery
// Responsive Menu
$(document).ready( () => {
    $('.fa-bars').click(function() {
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-toggle');
     });

     $(window).on('load scroll', function() {
         $('.fa-bars').removeClass('fa-times');
         $('.nav').removeClass('nav-toggle');

// Scroll top color change
         if($(window).scrollTop() > 10) {
          $('header').addClass('header-active');
           } else {
          $('header').removeClass('header-active');
         }
     });
});




// Javascript
// Price Selections
let custom = document.querySelector('.price-toggler .custom');
let shopify = document.querySelector('.price-toggler .shopify');
let wordpress = document.querySelector('.price-toggler .wordpress');
let customAmount = document.querySelectorAll('.price-container .price-box .custom');
let shopifyAmount = document.querySelectorAll('.price-container .price-box .shopify');
let wordAmount = document.querySelectorAll('.price-container .price-box .wordpress');

// Custom Section
custom.onclick = () => {
    custom.classList.add('active');
    shopify.classList.remove('active');
    wordpress.classList.remove('active');

customAmount.forEach(cu => {
    cu.style.display = 'block';
});

shopifyAmount.forEach(sh => {
    sh.style.display = 'none';
});

wordAmount.forEach(wo => {
    wo.style.display = 'none';

 });
};


// Shopify Section
shopify.onclick = () => {
    shopify.classList.add('active');
    custom.classList.remove('active');
    wordpress.classList.remove('active');

shopifyAmount.forEach(sh => {
    sh.style.display = 'block';
});

customAmount.forEach(cu => {
    cu.style.display = 'none';
});

wordAmount.forEach(wo => {
    wo.style.display = 'none';
 });
};

// Wordpress Section
wordpress.onclick = () => {
    wordpress.classList.add('active');
    shopify.classList.remove('active');
    custom.classList.remove('active');

wordAmount.forEach(wo => {
    wo.style.display = 'block';
});

customAmount.forEach(cu => {
     cu.style.display = 'none';
});

shopifyAmount.forEach(sh => {
    sh.style.display = 'none';

 });
};

// Data AOS
  AOS.init({
    duration: 1000,
    delay: 200
  })


//   Clears form info after submitting
  window.onbeforeunload = () => {
    for(const form of document.getElementsByTagName('form')) {
      form.reset();
    }
  }

