document.addEventListener("mousemove", function(e) {
    var cursor = document.querySelector(".cursor");
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});