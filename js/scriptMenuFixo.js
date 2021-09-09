$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('sticky');
  }else{
    $('nav').removeClass('sticky');
  }
})

$(document).ready(function(){
  $(".menu_toggle").click(function(){
    $("nav ul").toggleClass("active")
  })
})

function animatedIcon(x){
  x.classList.toggle("change");
}
