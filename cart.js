let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name}: $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    if (cart.length > 0) {
        alert('Checkout successful!\nTotal amount: $' + total.toFixed(2));
        cart = [];
        total = 0;
        updateCart();
    } else {
        alert('Your cart is empty. Add items to your cart first.');
    }
}
