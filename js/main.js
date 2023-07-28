// start alert
// $("document").ready(function(){
//   Swal.fire({
//       title: 'أهلا ومرحبا بكم فى محار',
//     confirmButtonText: 'نعم',
//       width: 600,
//       padding: '3em',
//       color: '#716add',
//       background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
//       backdrop: `
//         rgba(0,0,123,0.4)
//         url("https://sweetalert2.github.io/images/nyan-cat.gif")
//         left top
//         no-repeat
//       `    
//     })
//   })
  // end alert

const notif = document.querySelector(".notifcation");
const content = document.querySelector(".notification");
notif.addEventListener('click' , () =>{
  content.classList.toggle('active');
});


window.addEventListener('load' , () =>{
    const load = document.querySelector("#preloader")
    load.classList.add("loader--hidden");

});


// start navbar
(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 
// end navbar


let btns=document.querySelector(".top");

window.onscroll= () =>{
  content.classList.remove('active')
    if(window.scrollY >= 600){
        btns.style.display="block";
    } else {
        btns.style.display="none";
    }
}
btns.onclick=function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
    })
};


// start animation

let scroll = window.requestAnimationFrame || function (callback){
     window.setTimeout(callback, 1000/60)
}
let elementsToShow = document.querySelectorAll(".show-on-scroll");
function loop () {
    elementsToShow.forEach((element) =>{
     if(isElementInViewport(element)){
        element.classList.add('is-visible');
     }else{
        element.classList.remove('is-visible');
     }
    })
    scroll(loop)
}

loop();

function isElementInViewport(el){
    if(typeof jQuery === "function" && el instanceof jQuery){
        el = el[0];
    }
    let rect = el.getBoundingClientRect();
    return(
        (rect.top <=0 && rect.bottom >=0) || (rect.bottom >= (window.innerHeight ||document.documentElement.clientHeight) && rect.top <=(
            window.innerHeight ||document.documentElement.clientHeight
        ))
        ||
        (rect.top >=0 && rect.bottom <=(window.innerHeight || document.documentElement.clientHeight))
    )
}
// end animation




// start anime

const prags = document.querySelector(".main .head p");
    prags.innerHTML = prags.innerHTML.split(" ").map( (char) =>{
        return "<span>"+char+"</span>"
     }).join(" ")

anime.timeline({
    loop:true,
})

.add({
    targets:'.main p span' ,
    translateX : [-40 , 0] , 
    scale :[1.3 , 1] , 
    opacity:[0 , 1],
    easing:"easeOutExpo" , 
    duration:1500 , 
    delay:anime.stagger(300),
})
// end anime

