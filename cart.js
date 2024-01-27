const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
const cartTotal = localStorage.getItem('total') || '0';
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
        <button class="remove" onclick="remove()">remove</button>
    </div>
    </div>
  `;
  itemsField.appendChild(productDiv);
});

const totalDiv = document.createElement('div');
totalDiv.className = 'total';
totalDiv.innerHTML = `Total: $${parseFloat(cartTotal).toFixed(2)}
                      <button>checkout</button>`;
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

const storedUsername = localStorage.getItem('username');

if (storedUsername) {
  const details=document.getElementById("username");
  details.innerText=`Username : ${storedUsername}`;
  document.getElementById("Email").innerText=`Email : ${storedUsername}@lunarisprime.com`;
  document.getElementById("Address").innerText="Address: Stellar Crescent, Lunaris Prime,Celestial Sector: Alpha Centauri,Postal Code: LP-42X8Z";
  document.getElementById("DOA").innerText="Date Of Arrival: 22/5/2072";
  document.getElementById("ROI").innerText="Recored of Infection: No";
} else {
  console.log('Username not found in local storage');
}
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('#menu');

