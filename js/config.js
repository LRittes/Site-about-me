function scrollTo(element){
    document.querySelector(element).scrollIntoView({behavior: "smooth" });
}

document.querySelector("#btn-skills").addEventListener("click",function(event){
    event.preventDefault();
    header.classList.remove('on')
    document.body.style.overflow = 'initial'
    showN = true
    scrollTo(".section-skills")
})

document.querySelector("#btn-proj").addEventListener("click",function(event){
    event.preventDefault();
    header.classList.remove('on')
    document.body.style.overflow = 'initial'
    showN = true
    scrollTo(".section-proj")
})

document.querySelector("#btn-about").addEventListener("click",function(event){
    event.preventDefault();
    header.classList.remove('on')
    document.body.style.overflow = 'initial'
    showN = true
    scrollTo(".about")
})

document.querySelector("#btn-contact").addEventListener("click",function(event){
    event.preventDefault();
    header.classList.remove('on')
    document.body.style.overflow = 'initial'
    showN = true
    scrollTo(".contact")
})

document.querySelector("#btn-contact2").addEventListener("click",function(event){
    event.preventDefault();
    header.classList.remove('on')
    document.body.style.overflow = 'initial'
    showN = true
    scrollTo(".contact")
})


let showN = true;

const header = document.querySelector(".header");
const menuToggle = header.querySelector(".menu-toggle");

menuToggle.addEventListener('click', () => {

    document.body.style.overflow = showN ? 'hidden':'initial';

    header.classList.toggle("on",showN);
    
    showN = !showN;
})