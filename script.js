function validatePassword(event) {
    event.preventDefault(); // Prevent form submission
    
    var password = document.getElementById("password").value;
    
    // Check if the entered password matches the expected password
    if (password === "banana") {
      // Redirect to the protected page
      window.location.href = "about_me.html";
    } else {
      alert("Incorrect password. Please try again.");
    }
  }