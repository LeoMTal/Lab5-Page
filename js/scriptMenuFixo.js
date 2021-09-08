$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('sticky');
  }else{
    $('nav').removeClass('sticky');
  }
})

$(document).ready(function(){
  $(".logo img").click(function(){
    $("nav ul").toggleClass("active")
  })
})
