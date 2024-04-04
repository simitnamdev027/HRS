//ayush code
const signin_btn = document.querySelector("#signin-btn");
const signup_btn = document.querySelector("#signup-btn");
const container = document.querySelector(".container");

signup_btn.addEventListener("click",  () => {
    container.classList.add("signup-mode");
});

signin_btn.addEventListener("click",  () => { 
    container.classList.remove("signup-mode");
});

//login code 

document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
  
    // Dummy check for username, password, and role
    if (username.trim() === '' || password.trim() === '' || role === '') {
      alert('Please enter username, password, and select a role.');
      return;
    }
  
    // Here you can add your logic to validate credentials and redirect based on role
    if (role === 'doctor') {
      // Redirect to doctor's dashboard
      window.location.href = 'doctordash.html';
    } else if (role === 'patient') {
      // Redirect to patient's dashboard
      window.location.href = 'patient-dashboard.html';
    } else {
      alert('Invalid role selected.');
    }
  });
  

  //sginup page

  document.getElementById('signupbtn').addEventListener('click', function(event) {
    event.preventDefault();

    const username = document.getElementById('signupusername').value.trim();
    const password = document.getElementById('signuppassword').value.trim();
    const confirmPassword = document.getElementById('csignuppassword').value.trim();
    const email = document.getElementById('signupemail').value.trim();
    const role = document.getElementById('signuprole').value.trim();

    // Check if any field is empty
    if (username === '' || password === '' || email === '' || role === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email format.');
        return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
  }

    // Perform further validation or send data to server for validation

    // Dummy redirection based on role
    if (role === 'doctor') {
        // Redirect to doctor's dashboard
        window.location.href = 'doctordash.html';
    } else if (role === 'patient') {
        // Redirect to patient's dashboard
        window.location.href = 'patient-dashboard.html';
    } else {
        alert('Invalid role selected.');
    }
});

  


// updating mongodb
