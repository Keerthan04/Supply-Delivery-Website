
function myFunction() {
    var navRight = document.getElementById("nav-right");
    navRight.classList.toggle("open");
}

function home(){
    window.location.href="home.html";
}

function order(){
    window.location.href="order.html";
}

function typeWriter(text, targetElement, interval) {
    let i = 0;
    const heading = document.getElementById(targetElement);

    function type() {
        if (i < text.length) {
            heading.innerHTML += text.charAt(i);
            if (i === text.length - 1) {
                heading.innerHTML += ", <span id='L'>One Planet at a Time.</span>";
            }

            i++;
            setTimeout(type, interval);
        }
    }

    type();
}

typeWriter("Embark on a Journey to a New Frontier. Where Survivors Thrive, Dreams Soar, and Supplies Reach Beyond the Stars. We Deliver Hope", "heading-text", 100);
