
  document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form from submitting normally

    // Get values from inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("mess").value.trim();

    // Simple validation
    if (!name || !email || !password || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Success message
    alert(`Thank you, ${name}! Your message was sent successfully.`);

    // Optionally reset the form
    document.getElementById("myForm").reset();
  });

