var speed = 1;

window.addEventListener("scroll", function(e) {
    console.log("works");
    let scrolled = window.pageYOffset * 1.5;
    console.log(scrolled);
    var background = document.querySelector(".paralax");
    background.style.top = +(scrolled * speed) + "px";
});