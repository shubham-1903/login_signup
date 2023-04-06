// Wait for the DOM to load before executing the code
document.addEventListener("DOMContentLoaded", function() {
  // Get the login page element and show it by default
  const loginPage = document.getElementById("login-page");
  loginPage.style.display = "block";

  // Add an event listener to the signup link to show the signup page
  const signupLink = document.getElementById("signup-link");
  signupLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    loginPage.style.display = "none"; // Hide the login page
    const signupPage = document.getElementById("signup-page");
    signupPage.style.display = "block"; // Show the signup page
  });
});

// Wait for the DOM to load before executing the code
document.addEventListener("DOMContentLoaded", function() {
  // Get the signup page element and hide it by default
  const signupPage = document.getElementById("signup-page");
  signupPage.style.display = "none";

  // Add an event listener to the login link to show the login page
  const loginLink = document.getElementById("login-link");
  loginLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    signupPage.style.display = "none"; // Hide the signup page
    const loginPage = document.getElementById("login-page");
    loginPage.style.display = "block"; // Show the login page
  });
});
