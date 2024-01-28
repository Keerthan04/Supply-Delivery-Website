document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('map').setView([0, 0], 2); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
});

function myFunction() {
    var navRight = document.getElementById("nav-right");
    navRight.classList.toggle("open");
}
function home(){
    window.location.href="home.html";
}