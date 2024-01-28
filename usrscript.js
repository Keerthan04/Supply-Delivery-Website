const storedUsername = "Username";

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

function redirect(){
    window.location.href = 'guide.html';
}

function myFunction() {
  var navRight = document.getElementById("nav-right");
  navRight.classList.toggle("open");
}

function home(){
  window.location.href="home.html";
}