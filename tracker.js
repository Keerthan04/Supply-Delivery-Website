function display(){
    const orderInput = document.getElementById('order');
    const trackInfo = document.getElementById('info');
    const userInfo = document.getElementById('user');
    const trackDiv = document.getElementById('track');
    const storedUsername = "Username";

    if (orderInput.value) {
        trackDiv.style.display = 'block';
        trackInfo.textContent = `Tracking Order ID: ${orderInput.value}`;

        if (storedUsername) {
            userInfo.textContent = `Username: ${storedUsername}`;
        } else {
            console.log('Username not found in local storage');
        }
    } else {
        alert('Please enter your Order ID to track.');
    }
}

function myFunction() {
    var navRight = document.getElementById("nav-right");
    navRight.classList.toggle("open");
}

function home(){
    window.location.href="home.html";
}