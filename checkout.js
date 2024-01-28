let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
let cartTotal = localStorage.getItem('total') || '0';
const itemsField = document.getElementById('items');

cartItems.forEach(item => {
  const productDiv = document.createElement('div');
  productDiv.className = 'each-content';
  productDiv.innerHTML = `
    <div class="product searchable" id="product1">
    <div class="details">
        <div class="det-cont">
            <h3>${item.name}</h3>
            <p>$${item.price.toFixed(2)}</p>
        </div>
        <button class="remove" >remove</button>
    </div>
    </div>
  `;
  itemsField.appendChild(productDiv);
});

const totalDiv = document.createElement('div');
totalDiv.className = 'total';
totalDiv.innerHTML = `Total: $${parseFloat(cartTotal).toFixed(2)}
                    `;
itemsField.appendChild(totalDiv);

itemsField.addEventListener('click', function(event) {
if (event.target.className === 'remove') {
    const productDiv = event.target.closest('.each-content');
    const itemName = productDiv.querySelector('h3').textContent;
    const itemIndex = cartItems.findIndex(item => item.name === itemName);
    if (itemIndex > -1) {
 
    cartTotal -= cartItems[itemIndex].price;
    localStorage.setItem('total', cartTotal.toString());

 
    cartItems.splice(itemIndex, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));


    productDiv.remove();
    document.querySelector('.total').innerHTML = `Total: $${parseFloat(cartTotal).toFixed(2)}`;
    }
}
});

function myFunction() {
    var navRight = document.getElementById("nav-right");
    navRight.classList.toggle("open");
  }
  
  function home(){
    window.location.href="home.html";
  }

  function place() {
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zipCode = document.getElementById('zipCode').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expirationDate = document.getElementById('expirationDate').value;
    const cvv = document.getElementById('cvv').value;
    if (!fullName || !address || !city || !zipCode || !cardNumber || !expirationDate || !cvv) {
        alert("Please fill in all fields in the checkout form.");
    } else {
        if (cartTotal === '0') {
            alert("No items in the cart to ship");
        } else {
            
        }
    }
}
