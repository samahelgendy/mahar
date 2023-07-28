// start anime

const photo = document.querySelector(".img-con");
anime.timeline({
    loop:false,
})

.add({
    targets:'.img-con' ,
    translateY : [-400 , 0] , 
    scale :[1.3 , 1] , 
    opacity:[0 , 1],
    easing:"easeOutExpo" , 
    duration:1500 , 
    delay:anime.stagger(300),
    delay:1000,
})

const form = document.querySelector(".form");
anime.timeline({
    loop:false,
})

.add({
    targets:'.form' ,
    opacity:[0 , 1],
    easing:"easeOutExpo" , 
    duration:1500 , 
    delay:anime.stagger(300),
    delay:2000,
})

