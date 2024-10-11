document.addEventListener("mousemove", function(e) {
    var cursor = document.querySelector(".cursor");
    var x = e.clientX;
    var y = e.clientY;
    var dx = x - cursor.offsetLeft;
    var dy = y - cursor.offsetTop;
    var angle = Math.atan2(dy, dx);
    var speed = 0.1;
    cursor.style.top = (cursor.offsetTop + Math.sin(angle) * speed) + "px";
    cursor.style.left = (cursor.offsetLeft + Math.cos(angle) * speed) + "px";
});
document.addEventListener("mouseleave", function() {
    var cursor = document.querySelector(".cursor");
    cursor.style.display = "none";
});
document.querySelector("link[rel='stylesheet']").href = "style.css";

