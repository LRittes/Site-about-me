function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior: "smooth" });
}

document.querySelector("#btn-skills").addEventListener("click",function(event){
    event.preventDefault();
    scrollTo(".section-skills")
})

document.querySelector("#btn-proj").addEventListener("click",function(event){
    event.preventDefault();
    scrollTo(".section-proj")
})

document.querySelector("#btn-about").addEventListener("click",function(event){
    event.preventDefault();
    scrollTo(".about")
})

document.querySelector("#btn-contact").addEventListener("click",function(event){
    event.preventDefault();
    scrollTo(".contact")
})

document.querySelector("#btn-contact2").addEventListener("click",function(event){
    event.preventDefault();
    scrollTo(".contact")
})


let showN = true;

const header = document.querySelector(".header");
const menuToggle = header.querySelector(".menu-toggle");

menuToggle.addEventListener('click', () => {

    document.body.style.overflow = showN ? 'hidden':'initial';

    if(showN){
        header.classList.add("on");
    }
    else {
        header.classList.remove("on");
    }
    showN = !showN;
})