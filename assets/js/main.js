const bars = document.querySelector("#barsBtn");
const closeBtn = document.querySelector("#closeBtn");
const navBars = document.querySelector(".nav-list");


function handleNav() {
    navBars.classList.toggle("active");
}

bars.onclick = function(){
    handleNav();
}
closeBtn.onclick = function(){
    handleNav();
}