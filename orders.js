function searchProducts() {
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();
    var products = document.getElementsByClassName("each-cont");
    for (var i = 0; i < products.length; i++) {
        var productName = products[i].getElementsByClassName("det-cont")[0].getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (productName.includes(searchQuery)) {
            products[i].style.display = "block"; 
        } else {
            products[i].style.display = "none"; 
        }
    }
}

document.getElementById("searchInput").addEventListener("input", searchProducts);

let cart = [];
let total = 0;
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total.toString());
}

function myFunction() {
    var navRight = document.getElementById("nav-right");
    navRight.classList.toggle("open");
}

function home(){
    window.location.href="home.html";
}
