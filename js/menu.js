window.onscroll = function(){
    functionChangeMenuPositionToFixedOnScroll()
};

var navbar = document.getElementById("menu-container");
var sticky = navbar.offsetTop;
var toggleControler = true;

function functionChangeMenuPositionToFixedOnScroll(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky");
    }
}

function functionAnimationMenuToggleMobile(toggleVar){
    toggleVar.classList.toggle("change");
    var ulDisplay = document.getElementById('ul');
    var contentController = document.getElementById('about');

    if(toggleControler == true){
        ulDisplay.style.display = "block";
        contentController.style.marginTop = "250px";
        toggleControler = false;
    }else{
        ulDisplay.style.display = "none";
        contentController.style.marginTop = "0";
        toggleControler = true;
    }
}



/*
window.addEventListener("scroll", function(){
    
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if(scrollTop > lastScrollTop){
        navbar.style.top = "-80px";
    }else{
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
})
*/
