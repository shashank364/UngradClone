const navBtn = document.querySelector(".nav-btn");
const hamBurger = document.querySelector(".hamburger");
const darkBg = document.querySelector(".dark-back");
const navBar = document.querySelector("nav");
const searchBox = document.querySelector(".search-block input");

navBtn.addEventListener("click",function(){
    hamBurger.classList.toggle("active");
    darkBg.classList.toggle("active");
    navBar.classList.toggle("active");
    searchBox.classList.toggle("active");
});

darkBg.addEventListener("click", function(){
    hamBurger.classList.remove("active");
    darkBg.classList.remove("active");
    navBar.classList.remove("active");
    searchBox.classList.remove("active");
});