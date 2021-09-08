$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('sticky');
  }else{
    $('nav').removeClass('sticky');
  }
})