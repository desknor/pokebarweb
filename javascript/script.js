$(document).ready(function() {
//toggler btn
  $('.navbar-toggler').click(function() {
    $('.navbar-toggler').toggleClass('change')
  });

//scroll sticky nav bar less padding

$(window).scroll(function() {
  let position = $(this).scrollTop();
  
  if (position >= 718) {
    $('.navbar').addClass('navbar-background');
    $('.navbar').addClass('fixed-top');
  }
  else {
    $('.navbar').removeClass('navbar-background');
    $('.navbar').removeClass('fixed-top');
  }
});

// smooth scroll

$('.nav-item a, .header-link, #back-to-top').click(function(link) {
  link.preventDefault();

  let target = $(this).attr('href');

  $('html, body').stop().animate({
    scrollTop: $(target).offset().top - 25
  },2500);
});

//backtotop

$(window).scroll(function() {
  let position = $(this).scrollTop();
  
  if (position >= 718) {
    $('#back-to-top').addClass('scrollTop');
  }
  else {
    $('#back-to-top').removeClass('scrollTop');
  }
});

//ripples
  $("header, .info").ripples({
    dropRadius: 19,
    perturbance: 0.007,
  });
  //magnific popup
  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {enabled: true},
  });
});