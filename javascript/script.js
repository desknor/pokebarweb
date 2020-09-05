$(document).ready(function() {
  $("header, .info").ripples({
    //ripples
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