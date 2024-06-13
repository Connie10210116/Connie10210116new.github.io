// script.js
document.addEventListener('DOMContentLoaded', function() {
    var dot = document.getElementById('mouse-dot');

    document.addEventListener('mousemove', function(event) {
        dot.style.transform = `translate(${event.clientX - dot.offsetWidth / 2}px, ${event.clientY - dot.offsetHeight / 2}px)`;
    });
});s