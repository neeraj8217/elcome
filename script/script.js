console.log("cliked")
let navButton = document.getElementById('nav-button')
let navMenu = document.getElementById('nav-menu')
let closeButton = document.getElementById('close-button')


navButton.addEventListener('click', ()=>{
    console.log("cliked");
        if(navMenu.classList.contains("-left-full")){
           navMenu.classList.remove("-left-full")
           navMenu.classList.add("left-0") 
        }else{
            navMenu.classList.add("-left-full")
           navMenu.classList.remove("left-0")
        }
})

closeButton.addEventListener('click', ()=>{
    if(navMenu.classList.contains("left-0")){
        navMenu.classList.add("-left-full")
        navMenu.classList.remove("left-0") 
     }
})

