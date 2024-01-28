
function typeWriter(text, targetElement, interval) {
  let i = 0;
  const heading = document.getElementById(targetElement);

  function type() {
      if (i < text.length) {
          heading.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, interval);
      }
    }
  type();

}
typeWriter("alactic Gateway", "heading-text", 300);

function signup() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const rightContainer = document.querySelector(".right");

  rightContainer.style.alignItems = "flex-end";

  loginForm.style.opacity = "1";
  loginForm.style.transition = "opacity 0.5s ease-out";
  loginForm.style.transform = "translate(100%, 0%)";

  setTimeout(() => {
      signupForm.style.transform = "translate(-100%, 0%)";
      signupForm.style.transition = "transform 0.75s ease-in";
  }, 100);
}

function login() {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const rightContainer = document.querySelector(".right");

  rightContainer.style.alignItems = "center";

  signupForm.style.opacity = "1";
  signupForm.style.transition = "opacity 0.5s ease-out";
  signupForm.style.transform = "translate(100%, 0%)";

  setTimeout(() => {
      loginForm.style.transform = "translate(0%, 0%)";
      loginForm.style.transition = "transform 0.75s ease-in";
  }, 100);
}

function signedin(){
  const username = document.getElementById('signup-form').elements[0].value;
  const email = document.getElementById('signup-form').elements[1].value;
  const password = document.getElementById('signup-form').elements[2].value;
  const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  
  if (username && email && emailRegex.test(email)) {
      login();
  } else {
      alert('Please ensure all fields are filled out correctly and the password is strong.');
  }

}
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = event.target.elements[0].value;
  const password = event.target.elements[1].value;

  if (username !="" && password != "") {
      localStorage.setItem('username', username);
      window.location.href = 'home.html';
  } else {
      alert('Login failed');
  }
});




